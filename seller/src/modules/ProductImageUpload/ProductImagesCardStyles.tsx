import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    thumbnail: {
      borderRadius: '2px',
      width: '100%',
      objectFit: 'cover',
    },
    reorder: {
      marginLeft: '12px',
      marginRight: '12px',
    },
    cardContainerMain: {
      display: 'flex',
      width: '100%',
      maxWidth: '100%',
      margin: '20px auto',
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '100%',
      margin: 'auto 0',
      marginRight: '10px'
    },
    heroTagContainer: {
      border: '1px solid ' + theme.palette.secondary.main,
      borderRadius: '4px',
      width: '24px',
      marginRight: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
    },
    rotatedContainer: {
      transform: 'rotate(-90deg)',
    },
    heroContainerText: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    fields: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      marginLeft: '30px',
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
    progress: {
      padding: theme.spacing(0),
    },
    ImageHeader: {
      fontWeight: 600,
      fontFamily: 'Nunito Sans',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
    },
    HeroText: {
      fontWeight: 600,
      fontFamily: 'Nunito Sans',
      fontSize: '10px',
      lineHeight: '14px',
      color: '#FFFFFF',
    },
  })
);
