import { FormikProps } from 'formik';
import React, { useState } from 'react';
import { RegisterSellerInput, useRegisterSellerMutation } from '../../generated/graphql';
import { Steps, StepState } from '../../modules/Stepper/Steps';
import { Toast } from '../../modules/Toast/Toast';
import { SellerGeneralDetails } from './SellerGeneralDetails';
import { SellerUsersDetails } from './SellerUsersDetails';
import { GeneralDetails, SellerSignUpData, UserDetails } from './types';

const initialValues: SellerSignUpData = {
    generalDetails: {
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
    },
    user: {
        name: '',
        surname: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    }
}

export function SignUpPage() {
    const [values, setValues] = useState<SellerSignUpData>(initialValues);

    const [submitting, setSubmitting] = React.useState(false);

    const [step, setStep] = React.useState(0);

    const [stepStates, setStepStates] = React.useState([
        StepState.UNVIEWED,
        StepState.UNVIEWED,
        StepState.UNVIEWED,
    ]);

    const setStepState = (index: number, value: StepState) => {
        const oldState = stepStates;
        oldState[index] = value;
        setStepStates(oldState);
    };

    //eslint-disable-next-line
    const formRefArray: React.RefObject<FormikProps<any>>[] | null = [
        React.useRef<FormikProps<GeneralDetails>>(null),
        React.useRef<FormikProps<UserDetails>>(null)
    ];

    const [registerSeller, { loading }] = useRegisterSellerMutation();

    return (
        <Steps
            submitting={submitting}
            titles={['General Details', 'User Details']}
            currentStep={step}
            stepStates={stepStates}
            progress={async (step: number) => {
                const innerRef = formRefArray[step].current;
                if (innerRef) {
                    innerRef.setFieldValue('submitDirection', 'progress', false);
                    await innerRef.submitForm();
                    innerRef.setSubmitting(false);
                }
            }}
            regress={async (step: number) => {
                const innerRef = formRefArray[step].current;
                if (innerRef) {
                    innerRef.setFieldValue('submitDirection', 'regress', false);
                    await innerRef.submitForm();
                    innerRef.setSubmitting(false);
                }
            }}
        >
            <SellerGeneralDetails
                formRef={formRefArray[0]}
                progress={() => {
                    setStepState(0, StepState.COMPLETE);
                    setStep(step + 1);
                }}
                regress={() => setStep(step - 1)}
                values={values}
                setParentValues={setValues}
            />
            <SellerUsersDetails
                formRef={formRefArray[1]}
                progress={async () => {
                    setSubmitting(true);
                    try {
                        const input: RegisterSellerInput = {
                            name: values.generalDetails.name,
                            description: values.generalDetails.description,
                            email: values.generalDetails.email,
                            mobileNumber: values.generalDetails.mobileNumber,
                            //@ts-ignore
                            address: values.generalDetails.address,
                            user: {
                                name: values.user.name,
                                surname: values.user.surname,
                                email: values.user.email,
                                mobileNumber: values.user.mobileNumber,
                                password: values.user.password,
                            }
                        }

                        const response = await registerSeller({
                            variables:{
                                input
                            }
                        })

                        if(response){
                            Toast('success', 'Registration successful');
                        }
                    } catch (e: any) {
                        Toast('error', e.message)
                    } finally {
                        setSubmitting(false);
                    }
                    setStepState(1, StepState.COMPLETE);
                }}
                regress={() => setStep(step - 1)}
                values={values}
                setParentValues={setValues}
            />
        </Steps>
    )
}