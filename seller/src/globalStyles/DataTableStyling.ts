import {createStyles, makeStyles} from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    MuiTable: {
      root: {
        borderTop: '1px solid #F4F4F4',
      },
    },
    MuiTableHead: {
      root: {
        height: '40px',
        borderRadius: 30,
      },
    },
    MuiTableHeaderCell: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      height: '49px',
    },
    HeaderText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '30px',
      lineHeight: '41px',
      color: '#000000',
      textTransform: 'capitalize',
    },
    subHeaderText: {
      fontWeight: 500,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#666666',
    },
    TableHeaderText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#000000',
    },
    TableBodyText: {
      fontWeight: 500,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#000000',
    },
    TableBodyBoldLinkText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#0059FF',
    },
    TableBodyLink: {
      fontWeight: 500,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '19px',
    },
    CardHeaderText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '30px',
      lineHeight: '41px',
      color: '#00A74E',
    },
    CardBodyText: {
      fontWeight: 500,
      fontFamily: ' Poppins',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#666666',
    },
    CardFooterText: {
      fontStyle: 'italic',
      fontFamily: ' Poppins',
      fontSize: '10px',
      lineHeight: '14px',
      color: '#000000',
    },
    Divider: {
      width: '100%',
      color: '#CCCCCC',
    },
    ButtonText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
    },
    OddTableRow: {
      backgroundColor: '#F8F8F8',
    },
    EvenTableRow: {
      backgroundColor: '#FFFFFF',
    },
    searchBar: {
      borderRadius: '17.5px',
      maxHeight: '35px',
      '& .MuiFormLabel-root': {
        transform: 'translate(15px, 10px) scale(1)',
      },
    },
    searchBarText: {
      fontWeight: 500,
      fontFamily: ' Poppins',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#666666',
    },
    inputLabel: {
      '&.shrink': {
        transform: 'translate(15px, -6px) scale(0.75)',
      },
    },
    textButton: {
      fontFamily: ' Poppins',
      fontSize: '12px',
      lineHeight: '19px',
      color: 'white',
      textAlign: 'left',
    },
    button: {
      fontFamily: ' Poppins',
      lineHeight: '20px',
      fontSize: '14px',
      color: '#FFFFFF',
      fontWeight: 600,
    },
  })
);
