import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: 'white',
    },
    ctaIcon: {
      position: 'absolute',
      zIndex: 1,
      top: '8px',
      right: '8px',
    },

    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: '#000000',
      fontWeight: 'bold',
      lineHeight: '24px',
      fontSize: '24px',
      marginBottom: '15px'
    },

    sellerDetails: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#000000',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '20px',
        marginBottom: '15px'
      },

    description: {
        fontSize: '14px',
    },
    primary: {
      color: theme.palette.primary.main,
    },
    margin: {},
    cardContent: {
      paddingTop: 0,
    },
    cardSpecialChip: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 0,
    },
    overlay: {
      position: 'absolute',
      left: '0px',
      top: '0px',
      height: '100%',
      width: '100%',
      zIndex: 15,
      background: 'white',
    },
    imageCarousel: {
      width: '100%',
      background: 'white',
      borderRadius: theme.spacing(1, 1, 0, 0),
      height: 'auto',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    },
    bodyCard: {
      borderRadius: '8px',
      boxShadow: '0 0 16px rgba(0, 0, 0, 0.15)',
      background: 'white',
      position: 'relative',
      cursor: 'pointer',
    },
    actionScroller: {
      flexWrap: 'wrap',
      height: '100%',
      width: '80%',
      margin: '0 auto',
      fontSize: '8px',
    },
    chip: {
      zIndex: 10,
    },
    shareAndFavArea: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 0,
      position: 'relative',
    },
    productImage:{
        width: '450px',
        height: '350px'
    },
    productVideo:{
      width: '450px',
      height: '350px'
  },
    body: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
        cursor: 'pointer',
    },
    ChipPosition: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    VehicleNameText: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
    },
    MobileVehicleNameText: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#000000',
    },
    VehicleMillageText: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      maxWidth: '70px',
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '12px',
      color: '#666666',
    },
    BodyText: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#666666',
    },
    CurrencyText: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
    },
    DealerNameText: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#000000',
    },
    boxAlignment: {
      display: 'flex',
      width: '100%',
      marginBottom: '10px'
    },
  })
);
