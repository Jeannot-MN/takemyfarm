import { Box, Button, Typography } from "@material-ui/core";
import * as React from 'react';
import { CartContext } from "../../context/CartContext";
import { useYocoPopUp } from "../../hooks/yoco/useYocoScript";
import { CartItem } from "./CartItem";

export const CartPage = () => {

    const { cart, addItemToCart, removeItemFromCart, decrementItemQuantity } = React.useContext(CartContext);

    const [totalAmount, setTotalAmount] = React.useState(0);

    const { showYocoPaymentPopUp } = useYocoPopUp("pk_test_ed3c54a6gOol69qa7f45");

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
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="end"
                        mt={-3}
                        style={{

                        }}
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
                                onClick={() => {
                                    showYocoPaymentPopUp({
                                        amountInCents: totalAmount * 100,
                                        title: 'Complete your payment',
                                        description: '',
                                        onTokenSuccessful: (result: any) => {
                                            console.log(result);
                                        }
                                    })
                                }}
                            >
                                PAY {`(R ${totalAmount})`}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}