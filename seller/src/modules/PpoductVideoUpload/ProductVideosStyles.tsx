import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.common.white,
      width: '100%',

      display: 'flex',
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(3),
    },
    uploadContainer: {
      marginBottom: theme.spacing(3),
    },
    fileTypes: {
      padding: theme.spacing(1),
    },
    orDeviderOuter: {
      marginTop: theme.spacing(2),

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    orDeviderInner: {
      marginBottom: theme.spacing(2),
      marginTop: '-10px',
      background: 'white',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    addVideoUrlButton: {
      height: '48px',
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      flexBasis: 1,
    },
    uriField: {
      flexGrow: 2,
      flexBasis: 2,
    },
    addUrl: {
      color: theme.palette.primary.main,
    },
    removeVideos: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1.25),
    },
    removeVideosText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    removeVideoButton: {
      color: theme.palette.secondary.main,
      border: '0px solid transparent',
    },
    removeVideosButton: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
    },
    itemRight: {
      width: '50%',
      height: '100%',
    },
    itemLeft: {
      height: '100%',
      width: '50%',
    },
    Header: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '24px',
      lineHeight: '32px',
      color: '#000000',
      textTransform: 'uppercase',
    },
    SubHeader: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
    },
    Body: {
      fontWeight: 500,
      fontFamily: 'Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#666666',
    },
    buttonText: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#0059FF',
    },
    textField: {
      maxWidth: '360px',
      width: '100%',
    },
    HelperText: {
      color: '#666666',
      lineHeight: '14px',
      fontSize: '10px',
      fontStyle: 'italics',
      fontFamily: 'Poppins',
    },
    thumbnail: {
      borderRadius: '2px',
      width: '100%',
      objectFit: 'cover',
    },
    progress: {
      padding: theme.spacing(0),
    },
    ImageHeader: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
    },
  })
);
