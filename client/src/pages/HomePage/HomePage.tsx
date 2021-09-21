import React, { useEffect } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { Box, InputAdornment, Typography } from "@material-ui/core";
import { useScreenSize } from "../../hooks/useScreenSize";
import ProductCard from "../../modules/ProductCard/ProductCard";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FTextField } from "../../modules/FMaterial/FTextfield/FTextField";
import SearchIcon from '../../assets/SearchIcon.svg';
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Product } from '../../types/Product';
import { ProductDto, useProduQueryQuery } from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        cardContainer: {
            margin: '10px',
            marginTop: '20px',
            maxWidth: '262px',
            minWidth: '262px',
        },
        inputLabel: {
            '&.shrink': {
                transform: 'translate(15px, -6px) scale(0.75)',
            },
        },
        searchBar: {
            borderRadius: '17.5px',
            maxHeight: '35px',
            '&.MuiFormLabel-root': {
                transform: 'translate(15px, 10px) scale(1)',
            },
        },
        searchBarText: {
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#666666',
        },
        searchIcon: {
            cursor: 'pointer',
        },
        searchBarContainer: {
            width: "360px",
            marginTop: "-35px",
        }
    })
);

export function HomePage() {

    const { loading, error, data, refetch } = useProduQueryQuery({
        variables:{
            search: '',
        }
    });

    const classes = useStyles();
    const isDesktop = useScreenSize(600);
    const [page, setPage] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState<string>('');
    const {auth} = useAuthContext();
    const navigate = useNavigate();
    // const [sort, setSort] = React.useState({
    //     field: 'NAME',
    //     direction: 'ASCENDING',
    // });

    // const [rowsPerPage, setRowsPerPage] = React.useState(20);
    // const [fragmentNode, refetch] = useRefetchable(fragment, node);
    // React.useEffect(() => {
    //     refetch({
    //         search: searchValue,
    //         sort: sort,
    //         first: rowsPerPage,
    //         after: searchValue
    //             ? btoa(`arrayconnection:-1`)
    //             : btoa(`arrayconnection:${rowsPerPage * page - 1}`),
    //     });
    // }, [refetch, searchValue, sort, rowsPerPage, page]);


    if (loading) return <></>

    return (
        <Formik<SearchProps>
            onSubmit={({ search }) => {
                setSearchValue(search)
                refetch({ search: search})
            }}
            enableReinitialize
            initialValues={{
                search: searchValue || '',
            }}
        >
            {({ submitForm }) => {
                return (
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    // marginLeft={auth.authenticated ? 8 : 0}
                    >
                        <Form
                            onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    event.preventDefault();
                                    submitForm();
                                }
                            }}
                        >
                            <Box
                                width="100%"
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                                maxWidth="1440px"
                            >
                                <Box
                                    style={{
                                        width: isDesktop ? "360px" : "262px",
                                        marginTop: "-20px",
                                        // marginLeft: -35
                                    }}
                                >
                                    <FTextField
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.inputLabel,
                                                focused: 'focused',
                                                shrink: 'shrink',
                                            },
                                        }}
                                        InputProps={{
                                            className: classes.searchBar,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <img
                                                        src={SearchIcon}
                                                        height={16}
                                                        width={16}
                                                        alt="search icon"
                                                        className={classes.searchIcon}
                                                        onClick={() => submitForm()}
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                        style={{
                                            width: '100%',
                                            maxWidth: '360px',
                                        }}
                                        classes={{
                                            root: classes.searchBar,
                                        }}
                                        variant="outlined"
                                        field={{ name: 'search' }}
                                        label={
                                            <Typography className={classes.searchBarText}>
                                                Search
                                            </Typography>
                                        }
                                        autoFocus={true}
                                    />
                                </Box>

                                <Box className={classes.root} mt={ isDesktop ? 10 : 2}>
                                    {data && data.products.data.map((product : ProductDto, index:number) => {
                                        return (
                                            <Box className={classes.cardContainer} key={index}>
                                                <ProductCard product={product} />
                                            </Box>
                                        )
                                    })}
                                    {data && data.products.total === 0 && (
                                        <Box mt={15}>
                                            <Typography variant={"h4"}>
                                                Oops! No product found...
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Form>
                    </Box>
                )
            }}
        </Formik>

    );
};

interface SearchProps {
    search: string;
}
