import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginTop: 0,
      marginBottom: '2px',
      marginRight: '5px',
      borderRadius: '8px',
    },
    formControl: {
      marginRight: '5px',
    },

    rotatedContainer: {
      transform: 'rotate(-90deg)',
    },
    heroContainerText: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    hideHeroTagContainer: {
      display: 'none',
    },
    verticalAlignCenter: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginLeft: '12px',
      marginRight: '12px',
    },
    spacer: {
      height: '8px',
    },

    video: {
      height: 'auto',
      width: '100%',
      maxWidth: '500px',
      maxHeight: '500px',
    },
    playPaper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '120px',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    reorder: {
      marginLeft: '12px',
      marginRight: '12px',
    },
    fields: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      margin: theme.spacing(1),
    },
    removeSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    removeButton: {
      color: theme.palette.secondary.main,
      border: '0px solid transparent',
    },
    rowOne: {
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'center',
    },
    rowTwo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    uriField: {
      flexBasis: 2,
      margin: theme.spacing(0, 1, 0, 1),
    },
    editButton: {
      flexBasis: 1,
      margin: theme.spacing(0, 1, 0, 1),
    },
    thumbnail: {
      borderRadius: '2px',
      width: '100%',
      objectFit: 'cover',
    },
    cardContainerMain: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100%',
      margin: 'auto 0',
      marginBottom: '40px'
    },
    ImageHeader: {
      fontWeight: 600,
      fontFamily: 'Poppins',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
    },
    progress: {
      padding: theme.spacing(0),
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '100%',
      margin: 'auto 0',
    },
  })
);
