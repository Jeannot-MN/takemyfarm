import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    boxAlign: {
      display: 'flex',
      width: '100%',
    },
    dragAndDrop: {
      backgroundColor: 'white',
    },
    verticalAlign: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    removeImagesButton: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
    },
    removeImages: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: theme.spacing(1),
    },
    removeImagesText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    heroImagePlaceholder: {
      textTransform: 'uppercase',
      display: 'block',
      textAlign: 'center',
      fontWeight: 500,
    },

    rightSide: {
      overflow: 'auto',
      height: '100%',
      scrollbarWidth: 'none' /* Firefox */,
      msOverflowStyle: 'none',
      flexGrow: 1,
      flexBasis: 1,
    },
    leftSide: {
      backgroundColor: theme.palette.primary.main,
      overflow: 'auto',
      height: '100%',
      scrollbarWidth: 'none' /* Firefox */,
      msOverflowStyle: 'none',
      flexGrow: 1,
      flexBasis: 1,
    },
    leftSide___webkit_scrollbar: {display: 'none'},
    rightSide___webkit_scrollbar: {display: 'none'},
    fileTypes: {
      padding: theme.spacing(1),
    },
    box: {
      background: theme.palette.common.white,
    },
    sectionLine: {
      borderTop: '1px dashed #979797',
    },
    container: {
      background: 'white',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },

    preview: {
      display: 'flex',
      width: '100%',
      height: 'calc(100% - 233px)',
      padding: theme.spacing(4),
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    previewContainer: {
      display: 'flex',
      width: '100%',
      // height: 'calc(100% - 233px)',
      padding: theme.spacing(4),
      justifyContent: 'center',
      alignItems: 'center',
    },
    phone: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '100%',
      borderRadius: '24px',
      border: '0.5px solid white',
      width: '100%',
      minWidth: '280px',
      padding: theme.spacing(4),
    },
    card: {
      background: 'white',
      width: '100%',
      height: '388px',
      borderRadius: '16px',
    },
    carousel: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: '200px',
      maxWidth: '100%',
      overflow: 'hidden',
    },
    details: {
      padding: theme.spacing(1),
    },
    switchImage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '30%',
    },
    previewImage: {
      maxWidth: '200px',
      minWidth: '100px',
      width: '100%',
      borderRadius: theme.spacing(2, 2, 0, 0),
    },
    line1: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icons: {
      margin: theme.spacing(1),
    },
    rightShare: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mileage: {
      marginLeft: theme.spacing(1),
    },
    viewPicker: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    view: {
      margin: '0 8px',
      backgroundColor: '#FFFFFF',
      color: '#666666',
      borderColor: '#000000',
      width: theme.spacing(5),
      height: theme.spacing(5),
      lineHeight: '40px',
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'space-around',
    },
    viewActive: {
      margin: '0 8px',
      backgroundColor: theme.palette.secondary.main,
      color: '#FFFFFF',

      width: theme.spacing(5),
      height: theme.spacing(5),
      lineHeight: '40px',
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'space-around',
    },
    Header: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '24px',
      lineHeight: '32px',
      color: '#000000',
      textTransform: 'capitalize',
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
      fontSize: '12px',
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
  })
);
