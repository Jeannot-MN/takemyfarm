import React from 'react'
import styles from './ProductCardStyles';
import {useScreenSize} from "../../hooks/useScreenSize";
import {Box, Card, Tooltip, Typography} from "@material-ui/core";
import {Currency} from "../../atoms/Formatters";
import { ProductDto } from '../../generated/graphql';
import { useNavigate } from 'react-router';

interface Props {
    product: ProductDto;
}

function ProductCard(props: Props) {
    const classes = styles();
    const isDesktop = useScreenSize(1000);
    const {product} = props;

    const navigate = useNavigate();

    return (
        <Card
            className={classes.body}
            onClick={() => {
                navigate(`/products/${product.id}`);
            }}
        >
            <Box className={classes.imageContainer}>
                <img
                    src={product.images[0].url || ''}
                    alt={product.name}
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