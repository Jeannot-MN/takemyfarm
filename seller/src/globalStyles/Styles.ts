import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
    createStyles({
        boxAlignment: {
            display: 'flex',
            width: '100%',
        },
        textField: {
            maxWidth: '450px',
            width: '100%',
        }
    }));