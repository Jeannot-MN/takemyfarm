import React from 'react';
import { Box, Button, Link, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { FTextField } from '../../modules/FMaterial/FTextfield/FTextField';
import FormItem from '../../atoms/FormItem';
import { FTextFieldPassword } from '../../modules/FMaterial/FTextfield/FTextFieldPassword';
import { useNavigate } from 'react-router';
import { Role } from '../../types';
import { Toast } from '../../modules/Toast/Toast';
import { useAuthContext } from '../../context/AuthContext';

const signInSchema = yup.object().shape({
    email: yup.string().required('Email is required.'),
    password: yup.string().required('Password is required.'),
});

export function SignInPage() {
    const navigate = useNavigate();
    const { auth, handleLogin, hasRole } = useAuthContext();

    React.useEffect(() => {
        if (auth.authenticated) {
            if (hasRole(Role.ADMIN)) {
                navigate('/');
            } else {
                navigate('/');
            }
        }
    }, [navigate, auth.authenticated, hasRole]);
    return (
        <Box display="flex" justifyContent="center">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={signInSchema}
                onSubmit={async ({ email, password }) => {
                    try {
                        const loginResponse: any = await handleLogin(email, password);
                        console.log(loginResponse);

                        if (loginResponse && loginResponse.data.login.token) {
                            navigate('/');
                        }
                    } catch (error) {
                        Toast('error', error);
                    }
                }}
            >
                {({ submitForm }) => {
                    return (
                        <Box width="100%">
                            <Form
                                style={{ display: 'flex', justifyContent: 'center' }}
                                onKeyDown={(event) => {
                                    if (event.keyCode === 13) {
                                        event.preventDefault();
                                        submitForm();
                                    }
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    width="500px"
                                    pb={10}
                                >
                                    <Box pb={3} textAlign="center" maxWidth="500px">
                                        <Typography variant="h5">Welcome</Typography>
                                    </Box>

                                    <FormItem>
                                        <FTextField
                                            fullWidth
                                            field={{ name: 'email' }}
                                            label="Email"
                                            placeholder="Email"
                                        />
                                    </FormItem>

                                    <FormItem>
                                        <FTextFieldPassword
                                            fullWidth
                                            field={{
                                                name: 'password',
                                            }}
                                            type="password"
                                            label="Password"
                                            placeholder="Password"
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            fullWidth
                                            onClick={() => {
                                                submitForm();
                                            }}
                                        >
                                            Log In
                                        </Button>
                                    </FormItem>
                                    <Box display="flex" justifyContent="center" pb={3}>
                                        <Link
                                            component={'button'}
                                            color="secondary"
                                            onClick={() => {
                                                navigate('/forgotpassword');
                                            }}
                                        >
                                            Forgot Password?
                                        </Link>
                                    </Box>
                                    <Typography style={{ textAlign: 'center', color: 'black' }}>
                                        Don&apos;t have an account?
                                    </Typography>
                                    <Box display="flex" justifyContent="center" p={2}>
                                        <Link
                                            component={'button'}
                                            color="secondary"
                                            onClick={() => {
                                                navigate('/signup');
                                            }}
                                        >
                                            Create Account
                                        </Link>
                                    </Box>
                                </Box>
                            </Form>
                        </Box>
                    );
                }}
            </Formik>
        </Box>
    );
}
