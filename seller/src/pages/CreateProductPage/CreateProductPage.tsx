import { FormikProps } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerContext } from '../../context/SellerContext';
import { CreateProductInput, useCreateProductMutation, ProductImageInput, ProductVideoInput } from '../../generated/graphql';
import ProductVideos from '../../modules/ProductVideoUpload/ProductVideos';
import ProductImages from '../../modules/ProductImageUpload/ProductImages';
import { Steps, StepState } from '../../modules/Stepper/Steps';
import { Toast } from '../../modules/Toast/Toast';
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
    const { seller } = React.useContext(SellerContext);

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

    const [createProduct, { loading }] = useCreateProductMutation();

    const navigate = useNavigate();
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
                progress={async () => {
                    setSubmitting(true);
                    try {
                        const input: CreateProductInput = {
                            sellerId: seller?.id || 0,
                            name: values.name,
                            description: values.description,
                            price: parseInt(values.price.toString()),
                            category: values.category,
                            images: values.images.map(image => {
                                return {
                                    url: image.uri
                                } as ProductImageInput;

                            }),
                            videos: values.videos.map(video => {
                                return {
                                    url: video.uri
                                } as ProductVideoInput;

                            })
                        }

                        const response = await createProduct({
                            variables: {
                                input
                            }
                        })

                        if (response) {
                            Toast('success', 'Product Creation successful');
                        }
                    } catch (e: any) {
                        Toast('error', e.message)
                    } finally {
                        setSubmitting(false);
                    }
                    setStepState(2, StepState.COMPLETE);
                    navigate("/products");
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