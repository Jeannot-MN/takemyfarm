import React, { useCallback } from 'react';
import styles from './ProductVideosStyles';
import {
  ErrorMessage,
  Field,
  FieldArray,
  FieldArrayRenderProps,
  Formik,
  FormikProps,
} from 'formik';
import {
  Box,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { ProductVideosCard } from './ProductVideosCard';
import { ProductVideo, ProductVideosTab } from '../../pages/CreateProductPage/types';
import { Toast } from '../Toast/Toast';

interface Props {
  progress(): void;
  regress(): void;
  values: ProductVideosTab;
  handleSubmit: (values: ProductVideosTab) => void;
  formRef: React.RefObject<FormikProps<ProductVideosTab>>;
}
const validationSchema = yup.object().shape({
  videos: yup
    .array()
    .of(
      yup.object().shape({
        file: yup.mixed().required('A File is required to be uploaded'),
        uploading: yup
          .boolean()
          .test(
            'FileUploadDoneTest',
            'Please wait for your videos to upload.',
            (uploading: boolean | undefined) => {
              if (uploading) {
                return false;
              } else {
                return true;
              }
            }
          ),
      })
    )
    .max(5, 'You are limited to adding no more than 5 videos.'),
});
function ProductVideos(props: Props) {
  const classes = styles();
  const fileUploadInputRef = React.useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File, count: number, handleSubmit: () => void) => {
      //50MB

      if (file.size > 1024 * 1024 * 50) {
        Toast('error', 'Individual videos are not allowed to be larger than 50MB in size.');
      } else {
        //Check amount limit
        if (count > 10) {
          Toast('error', 'You can only upload a maximum of 10 videos');
        } else {
          const type = file.type.toLowerCase();
          if (type.indexOf('mp4') === -1) {
            Toast('error', 'Only MP4 extensions are allowed');
          } else {
            handleSubmit();
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
        <Typography className={classes.Header}>Listing Videos</Typography>
      </Box>
      <Box width="100%" pt="15.09px">
        <Divider style={{ borderTop: '1px solid #CCCCCC' }} />
      </Box>
      <Formik<ProductVideosTab>
        validationSchema={validationSchema}
        initialValues={props.values}
        innerRef={props.formRef}
        onSubmit={(values: ProductVideosTab) => {
          props.handleSubmit(values);
          values.submitDirection === 'progress'
            ? props.progress()
            : props.regress();
        }}
      >
        {({ values }: FormikProps<ProductVideosTab>) => {
          return (
            <FieldArray name="videos">
              {({ name, push, remove }: FieldArrayRenderProps) => {
                const videos: ProductVideo[] = values.videos;
                return (
                  <>
                    <Box className={classes.container}>
                      <ErrorMessage
                        name="videos"
                        render={(error: string) => {
                          typeof error === 'string' && Toast('error', error);
                          return null;
                        }}
                      />
                      <Box display={'flex'} flexDirection={'row'}>
                        <Box display={'flex'} flexDirection={'column'}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            width="100%"
                          >
                            <Box pt="39.82px">
                              <Typography className={classes.SubHeader}>
                                UPLOAD YOUR VIDEOS
                              </Typography>
                            </Box>
                            <Box pt="5px">
                              <Typography className={classes.Body}>
                                Upload multiple Videos of your listing here.
                                Please make sure the videos are in MP4 format
                              </Typography>
                            </Box>
                            {videos.length === 0 ? (
                              <Box pt="35px">
                                <TextField
                                  className={classes.textField}
                                  variant="outlined"
                                  disabled
                                  label="Choose images"
                                  helperText={
                                    <Typography className={classes.HelperText}>
                                      Maximum image size 50MB
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
                                    Upload more videos
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
                                    <Typography className={classes.buttonText}>
                                      Delete all
                                    </Typography>
                                  </Button>
                                </Box>
                              </Box>
                            )}
                            <Box>
                              {values.videos.map((_, index) => {
                                return (
                                  <Field
                                    key={index}
                                    name={`videos.[${index}]`}
                                    component={ProductVideosCard}
                                    index={index}
                                    handleRemoveClick={(index: number) => {
                                      remove(index);
                                    }}
                                    showEditIcon={false}
                                  />
                                )
                              })}
                            </Box>
                          </Box>
                          <input
                            role="button"
                            onKeyDown={(event) => {
                              if (event.charCode === 32) {
                                fileUploadInputRef.current?.click();
                              }
                            }}
                            name={name}
                            ref={fileUploadInputRef}
                            type="file"
                            accept="video/*"
                            multiple
                            style={{ display: 'none' }}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              let count = videos.length;
                              if (event.target && event.target.files) {
                                console.log("YES------------------");
                                console.log(event.target.files);

                                const files = event.target.files;
                                for (let i = 0; i < files.length; i++) {
                                  const file = files[i];
                                  count++;
                                  handleFile(file, count, () => {
                                    push({
                                      file: files[i],
                                      key: files[i].name,
                                    });
                                  });
                                }
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </>
                );
              }}
            </FieldArray>
          );
        }}
      </Formik>
    </Box>
  );
}
ProductVideos.displayName = 'ProductVideos';
export default ProductVideos;
