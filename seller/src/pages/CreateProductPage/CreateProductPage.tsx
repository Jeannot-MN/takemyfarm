import { Box, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { FTextField } from '../../modules/FMaterial/FTextfield/FTextField';
import { HeaderDivider } from '../../modules/HeaderDivider/HeaderDivider';
import { SubHeader } from '../../modules/SubHeader/SubHeader';
import Styles from '../../globalStyles/Styles';

interface ProductProps {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
    videoUrl?: string;
}

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("The product name is required"),

    description: yup
        .string()
        .required("The product description is required"),

    price: yup
        .number()
        .required("The product price is required"),

    category: yup
        .string()
        .required("The product category is required"),

    imageUrl: yup.string(),

    videoUrl: yup.string()
})

export const CreateProductPage = () => {
    const classes = Styles();
    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt="36px"
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
                    alignItems="center"
                    flexDirection="column"
                    maxWidth="1180px"
                    pl="20px"
                    pr="20px"
                >
                    <Formik<ProductProps>
                        validationSchema={validationSchema}
                        initialValues={{
                            name: "",
                            description: "",
                            price: 0,
                            category: "",
                            imageUrl: "",
                            videoUrl: ""
                        }}
                        onSubmit={() => { }}
                    >
                        {() => {
                            return (
                                <>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        width="100%"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box className={classes.boxAlignment}>
                                            <Box display="flex" flexDirection="column" width="100%">
                                                <HeaderDivider heading={'New Product'} />
                                                <SubHeader heading={'PRODUCT DETAILS'} />
                                            </Box>
                                        </Box>

                                        <Box className={classes.boxAlignment}>
                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        label="Name"
                                                        variant="outlined"
                                                        field={{ name: 'name' }}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        label="Description"
                                                        variant="outlined"
                                                        field={{ name: 'description' }}
                                                        multiline
                                                        rowsMax={4}
                                                        count={500}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box className={classes.boxAlignment} mt={2}>



                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        label="Price"
                                                        variant="outlined"
                                                        field={{ name: 'price' }}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        label="Category"
                                                        variant="outlined"
                                                        field={{ name: 'category' }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        width="100%"
                                        justifyContent="center"
                                        alignItems="center"
                                        pt="39.5px"
                                    >
                                        <Box className={classes.boxAlignment}>
                                            <Box display="flex" flexDirection="column" width="100%">
                                                <SubHeader heading={'MEDIA'} />
                                            </Box>
                                        </Box>


                                        <Box className={classes.boxAlignment}>
                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        field={{ name: 'imageUrl' }}
                                                        label="Image URL"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                            </Box>

                                            <Box display="flex" width="100%">
                                                <Box width="100%">
                                                    <FTextField
                                                        className={classes.textField}
                                                        field={{ name: 'videoUrl' }}
                                                        label="Video URL"
                                                        variant="outlined"
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </>
                            )
                        }}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}