import { Box, CircularProgress, IconButton, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Play from '@material-ui/icons/PlayArrowRounded';
import { FieldProps } from 'formik';
import React, {
  useCallback, useEffect,
  useRef,
  useState
} from 'react';
import DeleteIcon from '../../assets/DeleteIcon.svg';
import { Video } from '../../atoms/Video';
import { useGenerateUploadMutation } from '../../generated/graphql';
import { ProductVideo } from '../../pages/CreateProductPage/types';
import styles from './ProductVideosCardStyles';

export interface Props extends FieldProps<ProductVideo> {
  index: number;
  handleRemoveClick(index: number): void;
}

export function ProductVideosCard({
  form: { setFieldValue },
  field: { value, name },
  index,
  handleRemoveClick
}: Props) {
  const classes = styles();
  const { file } = value;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [errors, setErrors] = useState('');
  const uploadTrying = useRef<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const [generateUpload, { loading }] = useGenerateUploadMutation();

  const tryUpload = useCallback(
    async (getUri: string, putUri: string) => {
      if (uploadTrying.current) {
        return;
      }

      setUploading(true);

      uploadTrying.current = true;

      fetch(putUri, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Disposition': `attachment; filename=${file.name}.${file.type}`,
        },
        body: file,
      })
        .then(() => {
          setFieldValue(`${name}.uri`, getUri);
          setFieldValue(`${name}.uploading`, false);
          uploadTrying.current = false;
          setUploading(false);
        })
        .catch((error) => {
          uploadTrying.current = false;
          //handle error
          setErrors(error);
          // try again
          //TODO stop recursive call after few tries
          tryUpload(getUri, putUri);
          setUploading(false);
        });
    },
    [file, setFieldValue, setUploading, name]
  );

  const uploadVideo = useCallback(async () => {
    const response = await generateUpload({
      variables: {
        input: {
          uploadType: 'PRODUCT_VIDEO',
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
    !value.uri && uploadVideo();
  }, [uploadVideo, value.uri]);

  return (
  <Box className={classes.cardContainerMain}>
      <Box
        display={'flex'}
        width={'100%'}
        style={{
          background: '#FAFAFA',
          height: '60px',
          border: '1px solid #FAFAFA',
          borderRadius: '10px',
        }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box display="flex" width="100%" pl="20px">
          <Typography className={classes.ImageHeader}>{file.name}</Typography>
        </Box>
        {index !== 0 && <Box display="flex" flexDirection="column" />}
        {value.uploading && (
          <CircularProgress className={classes.progress} color="secondary" />
        )}
        {errors !== '' && (
          <Typography variant="body1">{JSON.stringify(errors)}</Typography>
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

      <Box className={classes.cardContainer} pt="5px">
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="center"
          // maxWidth="500px"
          height="200px"
          style={{ border: '1px solid #BA78EC', borderRadius: '10px' }}
        >
          <Box width="100%" justifyContent="center" display="flex">
            <Box className={classes.playPaper}>
              {/* <Typography variant="h6">Preview</Typography> */}
              {uploading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Fab size="large" color="secondary" onClick={handleOpen}>
                  <Play />
                </Fab>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        maxWidth="lg"
      >
        <Paper>
          <Video
            src={value.uri || ''}
            name={'Card-Video'}
            className={classes.video}
          />
        </Paper>
      </Dialog>
    </Box>
  );
}
