import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    HeaderText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '20px',
      lineHeight: '27px',
      color: '#000000',
      textTransform: 'uppercase',
    },
    Divider: {
      color: '#CCCCCC',
      width: '100%',
    },
    SubHeaderText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#000000',
    },
    CancelButton: {
      border: '1px solid #000000',
      backgroundColor: '#FFFFFF',
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#010101',
      textTransform: 'uppercase',
    },
    ConfirmButtonText: {
      border: '1px solid ' + theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
    },
    addButtonText: {
      fontWeight: 600,
      fontFamily: ' Poppins',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
    },
  })
);
