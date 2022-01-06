import {
  Box,
  Button,
  Divider, InputAdornment, TextField
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {
  ErrorMessage,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  Formik,
  FormikProps
} from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import FocusUpload from '../../assets/FocusedUpload';
import { ProductImagesTab } from '../../pages/CreateProductPage/types';
import { Toast } from '../Toast/Toast';
import { ProductImagesCard } from './ProductImagesCard';
import styles from './ProductImagesStyles';

const validationSchema = yup.object().shape({
  images: yup
    .array()
    .of(
      yup.object().shape({
        file: yup.mixed().required('A File is required to be uploaded'),
        uploading: yup
          .boolean()
          .test(
            'FileUploadDoneTest',
            'Please wait for your images to upload.',
            (uploading: boolean | undefined) => !uploading
          ),
      })
    )
    .min(2, 'You should upload at least 2 images.')
    .max(30, 'You are limited to adding no more than 30 images.')
    .required(),
});

interface Props {
  progress(): void;
  regress(): void;
  values: ProductImagesTab;
  handleSubmit: (values: ProductImagesTab) => void;
  showEditIcon: boolean;
}

const ProductImages = React.forwardRef<FormikProps<ProductImagesTab>, Props>(
  (props, ref) => {
    const classes = styles();
    const fileUploadInputRef = React.useRef<HTMLInputElement>(null);
    const [drag, setDrag] = React.useState(false);

    const handleFile = React.useCallback(
      (file: File, count: number, handleTestPassed: () => void) => {
        //10MB
        if (file.size >= 1024 * 1024 * 8) {
          Toast('error', 'Individual images are not allowed to be larger than 8MB in size.');
        } else {
          const type = file.type.toLowerCase();

          if (
            !(
              type.indexOf('jpg') !== -1 ||
              type.indexOf('png') !== -1 ||
              type.indexOf('jpeg') !== -1
            )
          ) {
            Toast('error', 'Only PNG, JPG or JPEG file extensions are allowed');
          } else {
            if (count > 30) {
              Toast('error', 'You can only upload a maximum of 30 images');
            } else {
              const img = new Image();
              img.src = window.URL.createObjectURL(file);
              img.onload = () => {
                const ar = 600 / 800;
                const imAr = img.height / img.width;

                if (ar !== imAr || (img.height <= 600 && img.width <= 800)) {
                  Toast('warning', 'Warning! The image you provided is not the recommended size of 800 x 600px or 1600 x 1200px');
                }
              };
              handleTestPassed();
            }
          }
        }
      },
      []
    );
    return (
      <Box
        display="flex"
        width="100%"
        pl="20px"
        pr="20px"
        maxWidth="1180px"
        flexDirection="column"
        pb={2}
        pt="105px"
      >
        <Box width="100%">
          <Typography className={classes.Header}>Listing Images</Typography>
        </Box>
        <Box width="100%" pt="15.09px">
          <Divider style={{ borderTop: '1px solid #CCCCCC' }} />
        </Box>

        <Formik<ProductImagesTab>
          validationSchema={validationSchema}
          initialValues={props.values}
          validateOnBlur={false}
          validateOnChange={true}
          innerRef={ref}
          onSubmit={(values: ProductImagesTab) => {
            props.handleSubmit(values);
            values.submitDirection === 'progress'
              ? props.progress()
              : props.regress();
          }}
        >
          {({ values }: FormikProps<ProductImagesTab>) => {
            return (
              <FieldArray name="images" validateOnChange={false}>
                {({ name, push, remove}: FieldArrayRenderProps) => {
                  const { images } = values;
                  return (
                    <Box className={classes.container}>
                      <ErrorMessage
                        name="images"
                        render={(error: string) => {
                          typeof error === 'string' && Toast('error', error);
                          return null;
                        }}
                      />
                      <Box display={'flex'} flexDirection={'row'}>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Box
                            display="flex"
                            pb={'20px'}
                            className={classes.dragAndDrop}
                          >
                            <Box
                              display="flex"
                              flexDirection="column"
                              width="100%"
                            >
                              <Box pt="39.82px">
                                <Typography className={classes.SubHeader}>
                                  UPLOAD YOUR IMAGES
                                </Typography>
                              </Box>
                              <Box pt="5px">
                                <Typography className={classes.Body}>
                                  Upload multiple images of your listing here.
                                  Please make sure the images are in PNG JPG or
                                  PEG format only. Ideal scale is 1600 x 1200px
                                  or 800 x 600px
                                </Typography>
                              </Box>
                              {images.length === 0 ? (
                                <Box pt="35px">
                                  <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    disabled
                                    label="Choose images"
                                    helperText={
                                      <Typography
                                        className={classes.HelperText}
                                      >
                                        Maximum image size 8MB
                                      </Typography>
                                    }
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <Button
                                            variant="text"
                                            color="primary"
                                            onClick={() => {
                                              if (
                                                fileUploadInputRef &&
                                                fileUploadInputRef.current
                                              ) {
                                                fileUploadInputRef.current.click();
                                              }
                                            }}
                                          >
                                            <Typography
                                              className={classes.buttonText}
                                            >
                                              Upload
                                            </Typography>
                                          </Button>
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </Box>
                              ) : (
                                <Box
                                  pt="20px"
                                  display="flex"
                                  width="100%"
                                  alignItems="center"
                                >
                                  <Button
                                    variant="text"
                                    color="primary"
                                    style={{ paddingLeft: 0 }}
                                    onClick={() => {
                                      if (
                                        fileUploadInputRef &&
                                        fileUploadInputRef.current
                                      ) {
                                        fileUploadInputRef.current.click();
                                      }
                                    }}
                                  >
                                    <Typography className={classes.buttonText}>
                                      Upload more images
                                    </Typography>
                                  </Button>
                                  <Box>
                                    <Divider
                                      orientation="vertical"
                                      style={{ height: '16.5px' }}
                                    />
                                  </Box>
                                  <Box>
                                    <Button variant="text" color="primary">
                                      <Typography
                                        className={classes.buttonText}
                                      >
                                        Delete all
                                      </Typography>
                                    </Button>
                                  </Box>
                                </Box>
                              )}
                            </Box>
                            <input
                              onKeyPress={(event) => {
                                if (event.charCode === 32) {
                                  fileUploadInputRef.current?.click();
                                }
                              }}
                              name={name}
                              ref={fileUploadInputRef}
                              type="file"
                              accept="image/*"
                              multiple
                              style={{ display: 'none' }}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                let count = images.length;
                                if (event.target && event.target.files) {
                                  const files = event.target.files;
                                  for (let i = 0; i < files.length; i++) {
                                    const file = files[i];
                                    count++;
                                    handleFile(file, count, () =>
                                      push({
                                        file: file,
                                        type: 'photo',
                                        key: file.name,
                                        category: '',
                                        description: '',
                                        uploading: true,
                                      })
                                    );
                                  }
                                }
                              }}
                            />
                            <div
                              onDrop={(
                                event: React.DragEvent<HTMLDivElement>
                              ) => {
                                event.preventDefault();
                                try {
                                  const files = event.dataTransfer.items;
                                  if (files) {
                                    let count = images.length;
                                    for (let i = 0; i < files.length; i++) {
                                      const fileBlob = files[i];
                                      const file = fileBlob.getAsFile();
                                      count++;
                                      if (file) {
                                        handleFile(file, count, () => {
                                          push({
                                            file: file,
                                            type: 'photo',
                                            key: file.name,
                                            category: '',
                                            description: '',
                                            uploading: true,
                                          });
                                        });
                                      }
                                    }
                                    setDrag(false);
                                  }
                                } catch (error: any) {
                                  Toast('error', error.message);
                                }
                              }}
                              onDragOver={(
                                e: React.DragEvent<HTMLDivElement>
                              ) => {
                                e.preventDefault();
                                setDrag(true);
                              }}
                              onDragLeave={(
                                e: React.DragEvent<HTMLDivElement>
                              ) => {
                                e.preventDefault();
                                setDrag(false);
                              }}
                            >
                              {drag ? <FocusUpload /> : null}
                            </div>
                          </Box>
                          <Box>
                            {values.images.map((_, index) => {
                              return (
                                <Field
                                  key={index}
                                  name={`images.[${index}]`}
                                  component={ProductImagesCard}
                                  index={index}
                                  handleRemoveClick={(index: number) => {
                                    remove(index);
                                  }}
                                  showEditIcon={props.showEditIcon}
                                />
                              )
                            })}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                }}
              </FieldArray>
            );
          }}
        </Formik>
      </Box>
    );
  }
);

ProductImages.displayName = 'VehicleImages';
export default ProductImages;
