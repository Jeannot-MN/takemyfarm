import {Box, makeStyles} from "@material-ui/core";
import {Route, Routes} from 'react-router-dom';
import {SignInPage} from "../../pages/SignInPage/SignInpage";
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
               <Route path="/" element={<SignInPage/>}/>
           </Routes>
        </Box>
    )
}