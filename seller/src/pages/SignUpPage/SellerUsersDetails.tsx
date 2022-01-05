import { Box } from '@material-ui/core';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { FTextField } from '../../modules/FMaterial/FTextfield/FTextField';
import { FTextFieldPassword } from '../../modules/FMaterial/FTextfield/FTextFieldPassword';
import { HeaderDivider } from '../../modules/HeaderDivider/HeaderDivider';
import { SubHeader } from '../../modules/SubHeader/SubHeader';
import styles from './SignUpStyles';
import { SellerSignUpData, UserDetails } from './types';

interface Props {
    progress: () => void;
    regress: () => void;
    values: SellerSignUpData;
    formRef: React.RefObject<FormikProps<UserDetails>>;
    setParentValues: (values: SellerSignUpData) => void;
    initialValues: UserDetails
}

export function SellerUsersDetails(props: Props) {

    const classes = styles();

    const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter the last name'),
        surname: yup.string().required('Please enter the first name'),
        email: yup.string().email('Email not valid').required('Email is required.'),
        mobileNumber: yup.string().required('Please enter the mobile number'),
        password: yup
            .string()
            .required('Password is required.')
            .min(5, 'Please make sure the password has a minimum of 5 characters'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), undefined], "Passwords don't match")
            .required('Confirm Password is required'),
    });

    return (
        <Formik<UserDetails>
            innerRef={props.formRef}
            initialValues={props.initialValues}
            validationSchema={validationSchema}
            onSubmit={(userDetails: UserDetails) => {
                props.setParentValues({
                    ...props.values,
                    user: {
                        ...userDetails
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
                        <Box
                            display="flex"
                            flexDirection="column"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box className={classes.boxAlignment}>
                                <Box display="flex" flexDirection="column" width="100%">
                                    <HeaderDivider heading={'SELLER USER'} />
                                    <SubHeader heading={'USER DETAILS'} />
                                </Box>
                            </Box>

                            <Box className={classes.boxAlignment}>
                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            label="First Name"
                                            variant="outlined"
                                            field={{ name: 'name' }}
                                        />
                                    </Box>
                                </Box>

                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextField
                                            className={classes.textField}
                                            label="Last Name"
                                            variant="outlined"
                                            field={{ name: 'surname' }}
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.boxAlignment} mt={2}>
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

                            <Box className={classes.boxAlignment} mt={2}>
                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextFieldPassword
                                            className={classes.textField}
                                            field={{ name: 'password' }}
                                            type="password"
                                            label="Password"
                                        />
                                    </Box>
                                </Box>

                                <Box display="flex" width="100%">
                                    <Box width="100%">
                                        <FTextFieldPassword
                                            className={classes.textField}
                                            label="Confirm Password"
                                            variant="outlined"
                                            field={{ name: 'confirmPassword' }}
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