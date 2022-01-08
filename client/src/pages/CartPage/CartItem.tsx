import { Box, Button, Paper, Typography } from "@material-ui/core";
import * as React from 'react';
import { CartItemProps } from "../../context/CartContext";
import { ProductDto } from "../../generated/graphql";

interface Props {
    item: CartItemProps,
    removeItemFromCart: (itemId: number) => void;
    addItemToCart: (item: ProductDto) => void;
    decrementItemQuantity: (itemId: number) => void;
}
export const CartItem = ({ item, removeItemFromCart, addItemToCart, decrementItemQuantity }: Props) => {
    return (

        <Box
            display="flex"
            width="100%"
        >
            <Paper
                style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px",
                }}
            >
                <Box
                    display="flex"
                    width="100%"
                >
                    <Box
                        mr={5}
                        width="30%"
                    >
                        <Box
                            style={{
                                width: '200px',
                                height: '200px'
                            }}
                        >
                            <img
                                src={item.product.images[0].url || ''}
                                alt={item.product.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>

                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        width="60%"
                    >
                        <Box display="flex">
                            <Typography
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold'
                                }}
                            >
                                {item.product.name}
                            </Typography>
                        </Box>

                        <Box display="flex">
                            <Typography
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '12px'
                                }}
                            >
                                Description:
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: '12px'
                                }}
                            >
                                &nbsp;{item.product.description}
                            </Typography>
                        </Box>

                        <Box display="flex">
                            <Typography
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '12px'
                                }}
                            >
                                Price:
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: '12px'
                                }}
                            >
                                &nbsp;R {item.product.price}
                            </Typography>
                        </Box>

                        <Box display="flex">
                            <Typography
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '12px'
                                }}
                            >
                                Quantity:
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: '12px'
                                }}
                            >
                                &nbsp;{item.quantity}
                            </Typography>
                        </Box>

                        <Box display="flex" mt={5}>
                            <Box mr={2}>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: '#ff615c',
                                        fontWeight: 'bold',
                                        borderRadius: '0',
                                        padding: '0 4px',
                                    }}
                                    onClick={() => {
                                        removeItemFromCart(item.product.id);
                                    }}
                                >
                                    REMOVE
                                </Button>
                            </Box>

                            <Box mr={2}>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: '#CCAC7C',
                                        fontWeight: 'bold',
                                        borderRadius: '0',
                                        padding: '0 4px',
                                    }}
                                    onClick={() => {
                                        decrementItemQuantity(item.product.id);
                                    }}
                                >
                                    -
                                </Button>
                            </Box>

                            <Box>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: '#276552',
                                        fontWeight: 'bold',
                                        borderRadius: '0',
                                        padding: '0 4px',
                                    }}
                                    onClick={() => {
                                        addItemToCart(item.product);
                                    }}
                                >
                                    +
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        width="10%"
                    >
                        <Box display="flex">
                            <Typography
                                style={{
                                    width: '100%',
                                    color: '#276552',
                                    fontWeight: 'bold',
                                    textAlign: 'right'
                                }}
                            >
                                R {item.product.price * item.quantity}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box >
    )
}