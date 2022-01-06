import { Box } from "@material-ui/core";
import { Formik, FormikProps } from "formik";
import React from "react";
import * as yup from 'yup';
import { FTextField } from "../../modules/FMaterial/FTextfield/FTextField";
import { HeaderDivider } from "../../modules/HeaderDivider/HeaderDivider";
import { SubHeader } from "../../modules/SubHeader/SubHeader";
import styles from './CreateProductStyles';
import { ProductGeneralDetailsTab, ProductProps } from "./types";

interface Props {
    progress: () => void;
    regress: () => void;
    values: ProductProps;
    formRef: React.RefObject<FormikProps<ProductGeneralDetailsTab>>;
    setParentValues: (values: ProductProps) => void;
    initialValues?: ProductGeneralDetailsTab
}
export function ProductGeneralDetails(props: Props) {
    const classes = styles();

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
            .required("The product category is required")
    })

    return (
        <Formik<ProductGeneralDetailsTab>
            innerRef={props.formRef}
            validationSchema={validationSchema}
            initialValues={props.initialValues || {
                name: props.values.name || '',
                description: props.values.description || '',
                price: props.values.price || 0,
                category: props.values.category || '',
            }}
            onSubmit={(generalDetails: ProductGeneralDetailsTab) => {
                props.setParentValues({
                    ...props.values,
                    ...generalDetails
                });
                props.progress();
            }}
        >
            {() => {
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
                            </Box>
                        </Box>
                    </Box>
                )
            }}
        </Formik>
    )
}