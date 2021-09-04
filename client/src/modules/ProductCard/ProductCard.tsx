import React from 'react'
import styles from './ProductCardStyles';
import {useScreenSize} from "../../hooks/useScreenSize";
import {Box, Card, Tooltip, Typography} from "@material-ui/core";
import {Currency} from "../../atoms/Formatters";
import {Product} from "../../types/Product";

interface Props {
    product: Readonly<Product>;
}

function ProductCard(props: Props) {
    const classes = styles();
    const isDesktop = useScreenSize(1000);
    const {product} = props;

    return (
        <Card
            className={classes.body}
            onClick={() => {
            }}
        >
            <Box className={classes.imageContainer}>
                <img
                    src={product.image}
                    className={classes.image}
                />
            </Box>
            <Box
                ml="15px"
                mb="16px"
                mr="15px"
                mt="16px"
                display="flex"
                flexDirection="column"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Tooltip title={product.description ?? ''}>
                        <Typography
                            className={
                                isDesktop
                                    ? classes.VehicleNameText
                                    : classes.MobileVehicleNameText
                            }
                            noWrap
                        >
                            {`${product.name}`}
                        </Typography>
                    </Tooltip>
                </Box>
                <Box pt="10px">
                    <Typography className={classes.CurrencyText}>
                        <Currency>{product.price}</Currency>
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductCard;