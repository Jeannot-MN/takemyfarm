import { Box, CircularProgress, IconButton, Typography } from '@material-ui/core';
import { FieldProps } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { AspectRatioContainer } from '../../atoms/AspectRatioContainer';
import { ProductImage } from '../../pages/CreateProductPage/types';
import { FTextField } from '../FMaterial/FTextfield/FTextField';
import styles from './ProductImagesCardStyles';
import EditIcon from '../../assets/EditIcon.svg';
import DeleteIcon from '../../assets/DeleteIcon.svg';
import { useGenerateUploadMutation } from '../../generated/graphql';

export interface Props extends FieldProps<ProductImage> {
  index: number;
  handleRemoveClick(index: number): void;
  showEditIcon: boolean;
}

export function ProductImagesCard({
  form: { setFieldValue },
  field: { value, name },
  index,
  handleRemoveClick,
  showEditIcon,
}: Props) {
  const classes = styles();
  const { file, uri } = value;
  const [errors, setErrors] = useState('');
  const [uploadTrying, setUploadTrying] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [generateUpload, { loading }] = useGenerateUploadMutation();

  const tryUpload = useCallback(
    async (getUri: string, putUri: string) => {
      if (uploadTrying) {
        return;
      }
      setUploadTrying(true);
      fetch(putUri, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Disposition': `attachment; filename=${file.name}.${file.type}`,
        },
        body: file,
      })
        .then(() => {
          setUploadTrying(false);
          setFieldValue(`${name}.uri`, getUri);
          setFieldValue(`${name}.uploading`, false);
        })
        .catch((error) => {
          //handle error
          setErrors(error);
          // try again
          //TODO stop recursive call after few tries
          tryUpload(getUri, putUri);
        });
    },
    [file, name, setFieldValue, uploadTrying]
  );

  const uploadImage = useCallback(async () => {
    const response = await generateUpload({
      variables: {
        input: {
          uploadType: 'PRODUCT_IMAGE',
        }
      }
    }
    );

    if (response && response.data) {
      const { getUri, putUri } = response.data.generateUpload;
      tryUpload(getUri, putUri);
    }
  }, [tryUpload]);

  useEffect(() => {
    !value.uri && !uploadTrying && uploadImage();
  }, [uploadImage, uploadTrying, value.uri]);

  return (
    <Box className={classes.cardContainerMain}>

      <Box className={classes.cardContainer}>
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          maxWidth="500px"
          height="200"
        // style={{ border: '1px solid #BA78EC', borderRadius: '10px' }}
        >
          <img
            src={uri ? uri : file ? URL.createObjectURL(file) : ''}
            className={classes.thumbnail}
            alt={file.name}
          />
        </Box>
      </Box>

      <Box
        display={'flex'}
        width={'100%'}
        alignItems={'start'}
      >
        {index !== 0 && <Box display="flex" flexDirection="column" />}
        {value.uploading && (
          <CircularProgress className={classes.progress} color="secondary" />
        )}
        {errors !== '' && (
          <Typography variant="body1">{JSON.stringify(errors)}</Typography>
        )}
        {showEditIcon ? (
          <Box>
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                src={EditIcon}
                alt="edit"
                style={{ width: '22px', height: '22px' }}
              />
            </IconButton>
          </Box>
        ) : (
          ''
        )}
        <Box mr="20px">
          <IconButton
            onClick={() => {
              handleRemoveClick(index);
            }}
          >
            <img
              src={DeleteIcon}
              alt="delete"
              style={{ width: '22px', height: '22px' }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
