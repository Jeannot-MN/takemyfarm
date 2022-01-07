import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Video } from '../../atoms/Video';
import { useProductByIdQuery } from '../../generated/graphql';
import { HeaderDivider } from '../../modules/HeaderDivider/HeaderDivider';
import { SubHeader } from '../../modules/SubHeader/SubHeader';
import styles from './ProductPageStyles';

export function ProductPage() {
    const { productId } = useParams();

    const { data } = useProductByIdQuery({
        variables: {
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
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className={classes.boxAlignment}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <SubHeader heading={'PRODUCT DETAILS'} />
                        </Box>
                    </Box>

                    <Box className={classes.boxAlignment}>
                        <Box>
                            <Box className={classes.productImage}>
                                <Box
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${data?.productById.images[0].url || ''})`,
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

            </Box>

            <Box
                width="100%"
                display="flex"
                // alignItems="center"
                flexDirection="row"
                maxWidth="1440px"
                pt="20px"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className={classes.boxAlignment}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <SubHeader heading={'PRODUCT MEDIA'} />
                        </Box>
                    </Box>
                    <Box className={classes.boxAlignment}>
                        {data && data.productById.videos.length > 0 && (
                            <Box>
                                <Box
                                    className={classes.productVideo}
                                >
                                    <Video
                                        src={data?.productById.videos[0].url || ''}
                                        name={'Card-Video'}
                                    // className={classes.video}
                                    />
                                </Box>
                            </Box>
                        )}

                        {data && data.productById.images.length > 1 && (
                            <Box style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                width: '100%',
                                marginLeft: '80px'
                            }}>
                                {data.productById.images.map((image, index) => {
                                    return (
                                        <Box
                                            style={{
                                                width: '300px',
                                                height: '200px',
                                                marginRight: '10px'
                                            }}
                                        >
                                            <Box
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundImage: `url(${image.url || ''})`,
                                                    backgroundSize: "cover"
                                                }}
                                            >
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                        )
                        }
                    </Box>
                </Box>

            </Box>

            <Box
                width="100%"
                display="flex"
                // alignItems="center"
                flexDirection="row"
                maxWidth="1440px"
                pt="20px"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box className={classes.boxAlignment}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <SubHeader heading={'SIMILAR PRODUCTS'} />
                        </Box>
                    </Box>
                    <Box className={classes.boxAlignment}>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}