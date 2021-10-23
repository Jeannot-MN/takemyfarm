import { Box, Button, Typography } from '@material-ui/core';
import React from 'react'; 
import { useParams } from 'react-router-dom';
import { useProductByIdQuery } from '../../generated/graphql';
import styles from './ProductPageStyles';

export function ProductPage(){
    const {productId} = useParams();

    const { loading, error, data, refetch } = useProductByIdQuery({
        variables:{
            id: parseInt(productId),
        }
    });

    const classes = styles();

    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
        // marginLeft={auth.authenticated ? 8 : 0}
        >
            <Box
                width="100%"
                display="flex"
                // alignItems="center"
                flexDirection="row"
                maxWidth="1440px"
            >
                
                <Box>
                    <Box className={classes.productImage}>
                        <Box 
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${data?.productById.image})`,
                                backgroundSize: "cover",
                                borderRadius: "25px"
                            }}
                        >
                        </Box>
                    </Box>

                </Box>

                <Box ml={10}>
                    <Box>
                        <Typography className={classes.title}>
                            {data?.productById.name}
                        </Typography>

                        <Typography className={classes.description}> 
                            Item description: {data?.productById.description}.
                        </Typography>

                        <Typography className={classes.description}> 
                            Price: R {data?.productById.price}
                        </Typography>

                        <Typography className={classes.description}> 
                            Seller notes: No comment left by the seller of this item.
                        </Typography>
                    </Box>

                    <Box mt={5}>
                        <Typography className={classes.sellerDetails}>
                            Seller Details
                        </Typography>

                        <Typography className={classes.description}> 
                            Name: {data?.productById.seller.name}
                        </Typography>

                        <Typography className={classes.description}> 
                            Tel: {data?.productById.seller.mobileNumber}
                        </Typography>

                        <Typography className={classes.description}> 
                            Email: {data?.productById.seller.email}
                        </Typography>
                    </Box>

                    <Box display="flex" flexDirection="row" mt={5}>
                            <Box pr={5}>
                                <Button
                                    color="primary"
                                >
                                    Add to cart
                                </Button>
                            </Box>

                            <Box>
                                <Button
                                    color="secondary"
                                >
                                    Add to wishlist
                                </Button>
                            </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}