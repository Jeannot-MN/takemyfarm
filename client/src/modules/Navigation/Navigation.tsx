import { Box, makeStyles } from "@material-ui/core";
import { Route, Routes } from 'react-router-dom';
import { CartPage } from "../../pages/CartPage/CartPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import { SignInPage } from "../../pages/SignInPage/SignInpage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import { Header } from "../Header/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        paddingRight: 100,
        paddingLeft: 100,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 10,
            overflowX: 'hidden',
            paddingRight: 10,
        },
    },
}));

export function Navigation() {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Route element={<Header />} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Box>
    )
}