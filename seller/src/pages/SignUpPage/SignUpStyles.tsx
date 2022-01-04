import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    bodyWrapper: {
      background: theme.palette.common.white,
    },
    buttonFont: {
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
    },
    box: {
      marginLeft: theme.spacing(3),
      overflow: 'auto',
      paddingBottom: theme.spacing(3),
    },
    h6: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    formControl: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: theme.spacing(1),
    },
    subtitle1: {
      width: '100%',
      color: theme.palette.primary.main,
    },
    commentControl: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: theme.spacing(1),
    },
    comment: {
      marginRight: theme.spacing(1),
    },
    dragAndDrop: {
      display: 'flex',
      paddingTop: theme.spacing(1.5),
    },
    uploadContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    uploadButtonCaption: {
      marginTop: theme.spacing(1.5),
    },
    uploadButton: {
      height: '40px',
    },
    fileTypes: {
      padding: theme.spacing(1),
      // color: theme.grey.shade1,
    },
    verticalAlign: {
      display: 'flex',
      flexDirection: 'column',
      // color: theme.grey.shade1,
    },
    caption: {
      marginBottom: theme.spacing(1),
    },
    grid: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    centerHorizonal: {
      width: '100%',
    },
    logoPreview: {
      marginTop: theme.spacing(2),
      height: '150px',
      borderRadius: '16px',
      // backgroundColor: theme.grey.shade3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoPreviewText: {
      color: theme.palette.primary.main,
    },
    spacer: {
      marginRight: theme.spacing(1),
    },
    disabled: {
      // background: theme.grey.shade3,
    },
    dayLabel: {
      marginLeft: '16px',
      minWidth: theme.spacing(13),
    },
    shade1: {
      // color: theme.grey.shade1,
    },
    displaySystemIcon: {
      width: '60px',
      height: '60px',
      marginLeft: '20px',
      cursor: 'pointer',
    },
    displayIcon: {
      width: '60px',
      height: '60px',
      marginLeft: '20px',

      // cursor: 'pointer',
    },
    smallImage: {
      objectFit: 'contain',
      marginLeft: '4px',
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    Avatar: {
      objectFit: 'contain',
    },
    boxAlignment: {
      display: 'flex',
      width: '100%',
    },
    sectionLine: {
      borderTop: '1px dashed #979797',
    },
    textField: {
      maxWidth: '450px',
      width: '100%',
    },
    dealerDescription: {
      height: '124px',
    },
    HelperText: {
      color: '#666666',
      lineHeight: '14px',
      fontSize: '10px',
      fontStyle: 'italics',
      fontFamily: 'Nunito Sans',
    },
    Logo: {
      contain: 'strict',
    },
    BodyText: {
      color: '#000000',
      fontSize: '16px',
      lineHeight: '22px',
      fontFamily: 'Nunito Sans',
    },
    MapLookupButton: {
      border: '1px solid ##00A74E',
      color: '#FFFFFF',
      backgroundColor: '#00A74E',
      '&:hover': {
        backgroundColor: '#00A74E',
        color: '#FFFFFF',
      },
    },
  })
);
