import { FormikProps } from 'formik';
import * as React from 'react';
import ProductVideos from '../../modules/PpoductVideoUpload/ProductVideos';
import ProductImages from '../../modules/ProductImageUpload/ProductImages';
import { Steps, StepState } from '../../modules/Stepper/Steps';
import { ProductGeneralDetails } from './ProductGeneralDetails';
import { ProductGeneralDetailsTab, ProductImagesTab, ProductProps, ProductVideosTab } from './types';


const initialValues: ProductProps = {
    name: "",
    description: "",
    price: 0,
    category: "",
    images: [],
    videos: []
}

export const CreateProductPage = () => {
    const [values, setValues] = React.useState<ProductProps>(initialValues);

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
        React.useRef<FormikProps<ProductGeneralDetailsTab>>(null),
        React.useRef<FormikProps<ProductImagesTab>>(null),
        React.useRef<FormikProps<ProductVideosTab>>(null)
    ];
    return (
        <Steps
            submitting={submitting}
            titles={['General Details', 'Images', "Videos"]}
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
            <ProductGeneralDetails
                formRef={formRefArray[0]}
                progress={() => {
                    setStepState(0, StepState.COMPLETE);
                    setStep(step + 1);
                }}
                regress={() => setStep(step - 1)}
                values={values}
                setParentValues={setValues}
            />

            <ProductImages
                ref={formRefArray[1]}
                progress={() => {
                    setStepState(1, StepState.COMPLETE);
                    setStep(step + 1);
                }}
                regress={() => setStep(step - 1)}
                values={{
                    images: values.images,
                    submitDirection: 'progress',
                }}
                handleSubmit={(tab2) => setValues({ ...values, images: tab2.images })}
                showEditIcon={false}
            />

            <ProductVideos
                formRef={formRefArray[2]}
                progress={() => {
                    setStepState(2, StepState.COMPLETE);
                    setStep(step + 1);
                }}
                regress={() => setStep(step - 1)}
                values={{
                    videos: values.videos,
                    submitDirection: 'progress',
                }}
                handleSubmit={(tab3) => setValues({ ...values, videos: tab3.videos })}
            />
        </Steps>
    )
}