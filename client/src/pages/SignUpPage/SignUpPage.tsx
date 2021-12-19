import { Box, Button, CircularProgress, Link, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import FormItem from '../../atoms/FormItem';
import { useAuthContext } from '../../context/AuthContext';
import { useRegisterUserMutationMutation } from '../../generated/graphql';
import { FTextField } from '../../modules/FMaterial/FTextfield/FTextField';
import { FTextFieldPassword } from '../../modules/FMaterial/FTextfield/FTextFieldPassword';
import { Toast } from '../../modules/Toast/Toast';
import './SignUpPageStyling.css';

const signUpSchema = yup.object().shape({
  email: yup.string().email('Email not valid').required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(5, 'Please make sure your password has a minimum of 5 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], "Passwords don't match")
    .required('Confirm Password is required'),
  surname: yup.string().required('Please enter your last name'),
  name: yup.string().required('Please enter your first name'),
  mobileNumber: yup.string(),
});

export function SignUpPage() {
  const navigate = useNavigate();
  const { auth, handleLogin } = useAuthContext();

  const [registerUser, { loading }] = useRegisterUserMutationMutation();

  React.useEffect(() => {
    if (auth.authenticated) {
      navigate('/');
    }
  }, [navigate, auth.authenticated]);

  if (auth.authenticated) {
    return <></>;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          mobileNumber: ''
        }}
        validationSchema={signUpSchema}
        onSubmit={async ({
          name,
          surname,
          email,
          password,
          mobileNumber
        }) => {
          try {
            const response = await registerUser({
              variables: {
                input: {
                  name,
                  surname,
                  email,
                  password,
                  mobileNumber
                }
              }
            })
            if (response) {
              const loginResponse: any = await handleLogin(email, password);
              if (loginResponse && loginResponse.data.login.token) {
                navigate('/');
              } else {
                Toast('error', 'Login failed.');
              }
            } else {
              Toast('error', 'Something went wrong');
            }
          } catch (error: any) {
            Toast('error', error.message);
          }
        }}
      >
        {({ submitForm, setFieldValue }) => {
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
                    <Typography variant="h5">Sign Up</Typography>
                  </Box>

                  <FormItem>
                    <FTextField
                      fullWidth
                      field={{ name: 'name' }}
                      label="First Name"
                    />
                  </FormItem>

                  <FormItem>
                    <FTextField
                      fullWidth
                      field={{ name: 'surname' }}
                      label="Last Name"
                    />
                  </FormItem>

                  <FormItem>
                    <FTextField
                      fullWidth
                      field={{ name: 'mobileNumber' }}
                      label="Cellphone / Telephone Number"
                    />
                  </FormItem>

                  <FormItem>
                    <FTextField
                      fullWidth
                      field={{ name: 'email' }}
                      label="E-mail"
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
                    />
                  </FormItem>

                  <FormItem>
                    <FTextFieldPassword
                      fullWidth
                      field={{
                        name: 'confirmPassword',
                      }}
                      type="password"
                      label="Confirm password"
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
                      {loading ? (
                        <CircularProgress size={26} style={{ color: 'white' }} />
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </FormItem>
                  <Box display="flex" justifyContent="center" pb={3}>
                    <Link
                      component={'button'}
                      color="secondary"
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      Sign In
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