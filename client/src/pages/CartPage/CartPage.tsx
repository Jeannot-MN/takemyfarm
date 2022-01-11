import { Box, Button, Typography } from "@material-ui/core";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { OrderItemInput, useCompleteOrderMutation } from "../../generated/graphql";
import { useYocoPopUp } from "../../hooks/yoco/useYocoScript";
import { Toast } from "../../modules/Toast/Toast";
import { CartItem } from "./CartItem";

export const CartPage = () => {

    const { cart, updateCart, addItemToCart, removeItemFromCart, decrementItemQuantity } = React.useContext(CartContext);

    const [totalAmount, setTotalAmount] = React.useState(0);

    const { showYocoPaymentPopUp } = useYocoPopUp("pk_test_8639185aRmMJEXVbf4d4");

    const [completeOrder, { loading }] = useCompleteOrderMutation();

    const { auth } = useAuthContext();

    const navigate = useNavigate();


    React.useEffect(() => {
        if (cart) {
            let totalAmountDue = 0;
            cart.items.forEach(item => {
                totalAmountDue += item.quantity * item.product.price;
            });

            setTotalAmount(totalAmountDue);
        }
    }, [cart])

    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                flexDirection="column"
                maxWidth="1440px"
            >
                <Box
                    width="100%"
                    display="flex"
                    maxWidth="800px"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        display="flex"
                        mb={5}
                        style={{
                            backgroundColor: '#f5f1f0',
                            padding: '10px'
                        }}
                    >
                        <Typography
                            style={{
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}
                        >
                            YOUR CART {`(${cart.items.length})`}
                        </Typography>
                    </Box>
                    {cart.items.length > 0 ? cart.items.map((item, index) => (
                        <Box
                            key={index}
                            width="100%"
                            display="flex"
                            alignItems="center"
                            mb={5}
                        >
                            <CartItem
                                item={item}
                                addItemToCart={addItemToCart}
                                removeItemFromCart={removeItemFromCart}
                                decrementItemQuantity={decrementItemQuantity}
                            />
                        </Box>

                    )) : (
                        <Box
                            width="100%"
                            display="flex"
                            alignItems="center"
                        >
                            <Typography>Your  cart is currently empty...</Typography>
                        </Box>
                    )}
                    {cart.items.length > 0 && (
                        <Box
                            width="100%"
                            display="flex"
                            justifyContent="end"
                            mt={-3}
                        >
                            <Box>
                                <Button
                                    variant="outlined"
                                    style={{
                                        backgroundColor: '#276552',
                                        color: '#FFFFFF',
                                        fontWeight: 'bold',
                                        borderRadius: '0',
                                        padding: '0 4px',
                                    }}
                                    disabled={loading}
                                    onClick={() => {
                                        showYocoPaymentPopUp({
                                            amountInCents: totalAmount * 100,
                                            title: 'Complete your payment',
                                            description: '',
                                            onTokenSuccessful: async (result: any) => {
                                                const items: OrderItemInput[] = cart.items.map(item => {
                                                    return {
                                                        productId: item.product.id,
                                                        quantity: item.quantity
                                                    }
                                                })
                                                try {
                                                    const response = await completeOrder({
                                                        variables: {
                                                            input: {
                                                                userId: auth.authenticated ? auth.user.id : 0,
                                                                paymentToken: result.id,
                                                                items: items,
                                                                totalAmountInCents: totalAmount * 100
                                                            }
                                                        }
                                                    })

                                                    if (response.data?.completeOrder.successful) {
                                                        Toast('success', "Your order was completed");
                                                        updateCart({ items: [] });
                                                        navigate('/');
                                                    }
                                                } catch (e: any) {
                                                    Toast('error', e.message);
                                                }
                                            }
                                        })
                                    }}
                                >
                                    PAY {`(R ${totalAmount})`}
                                </Button>
                            </Box>
                        </Box>
                    )}

                    <Box
                        mt={2}
                        width="100%"
                        display="flex"
                        alignItems="center"
                    >
                        <Button
                            variant="text"
                            style={{
                                color: '#276552',
                                fontWeight: 'bold',
                            }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Browse for products...
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}