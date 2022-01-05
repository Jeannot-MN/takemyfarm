import {Box, makeStyles} from "@material-ui/core";
import {Route, Routes} from 'react-router-dom';
import { CreateProductPage } from "../../pages/CreateProductPage/CreateProductPage";
import { EditSellerPage } from "../../pages/EditSellerPage/EditSeller";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { PurchasesPage } from "../../pages/PurchasesPage/PurchasesPage";
import {SignInPage} from "../../pages/SignInPage/SignInpage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import {Header} from "../Header/Header";

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

export function Navigation(){
    
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Header/>
           <Routes>
               <Route path="/login" element={<SignInPage/>}/>
               <Route path="/register" element={<SignUpPage/>}/>
               <Route path="/products" element={<ProductsPage/>}/>
               <Route path="/purchases" element={<PurchasesPage/>}/>
               <Route path="/profile" element={<EditSellerPage/>}/>
               <Route path="/newProduct" element={<CreateProductPage/>}/>
           </Routes>
        </Box>
    )
}