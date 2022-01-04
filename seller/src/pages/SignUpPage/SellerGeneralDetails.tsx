import { Box } from "@material-ui/core";
import { Formik, FormikProps } from "formik";
import React from "react";
import * as yup from 'yup';
import { FTextField } from "../../modules/FMaterial/FTextfield/FTextField";
import { HeaderDivider } from "../../modules/HeaderDivider/HeaderDivider";
import { SubHeader } from "../../modules/SubHeader/SubHeader";
import styles from './SignUpStyles';
import { GeneralDetails, SellerSignUpData } from "./types";

interface Props {
    progress: () => void;
    regress: () => void;
    values: SellerSignUpData;
    formRef: React.RefObject<FormikProps<GeneralDetails>>;
    setParentValues: (values: SellerSignUpData) => void;
}
export function SellerGeneralDetails(props: Props) {
    const classes = styles();
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required("The name is required."),

        description: yup
            .string()
            .required("The description is required."),

        email: yup
            .string()
            .email("Invalid email address.")
            .required("The email is required."),

        mobileNumber: yup
            .string()
            .required("The mobile number is required."),

        address: yup.object().shape({
            street: yup.string().required('Street is required'),
            suburb: yup.string().required('Suburb is required'),
            city: yup.string().required('City is required'),
            postCode: yup.string().required('Postal code is required'),
            province: yup.string()
        }),
    })
    return (
        <Formik<GeneralDetails>
            innerRef={props.formRef}
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                description: '',
                email: '',
                mobileNumber: '',
                address: {
                    street: '',
                    suburb: '',
                    city: '',
                    postCode: '',
                    province: ''
                }
            }}
            onSubmit={(generalDetails: GeneralDetails) => {
                props.setParentValues({ 
                    ...props.values,
                    generalDetails:{
                        ...generalDetails
                    }
                });
                props.progress();
            }}
        >
            {() => {
                return (
                    <Box
                        display="flex"
                        width="100%"
                        maxWidth="1039.75px"
                        minWidth="80%"
                        alignItems="center"
                        flexDirection="column"
                        pb={2}
                        pt="50px"
                    >
                        {/* <ConnectedFocusError /> */}
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box className={classes.boxAlignment}>
                                <Box display="flex" flexDirection="column" width="100%">
                                    <HeaderDivider heading={'SELLER'} />
                                    <SubHeader heading={'GENERAL DETAILS'} />
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
                                            label="Email"
                                            variant="outlined"
                                            field={{ name: 'email' }}
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.boxAlignment} mt={2}>
                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            label="About"
                                            variant="outlined"
                                            field={{ name: 'description' }}
                                            multiline
                                            rowsMax={4}
                                            count={500}
                                        />
                                    </Box>
                                </Box>

                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            label="Mobile Number"
                                            variant="outlined"
                                            field={{ name: 'mobileNumber' }}
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
                                    <SubHeader heading={'ADDRESS DETAILS'} />
                                </Box>
                            </Box>


                            <Box className={classes.boxAlignment}>
                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            field={{ name: 'address.street' }}
                                            label="Street"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>

                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            field={{ name: 'address.suburb' }}
                                            label="Suburb"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.boxAlignment} mt={2}>
                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            field={{ name: 'address.city' }}
                                            label="City"
                                            variant="outlined"
                                        />
                                    </Box>
                                </Box>

                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            field={{ name: 'address.postCode' }}
                                            label="Postal code"
                                            variant="outlined"
                                        />
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