import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
    },
    MuiButton: {
      variant: 'contained',
      size: 'small',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      notchedOutline: {
        borderColor: '#7E8D94',
      },
    },

    MuiButton: {
      root: {
        borderRadius: '10px',
        textTransform: 'none',
        color: 'white',
        fontWeight: 400,
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiChip: {
      root: {
        padding: 0,
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: 'Georama',
        fontWeight: 500,
        fontSize: '17px',
        lineHeight: '1.4',
        display: 'flex',
        alignItems: 'center',
      },
    },
    // MuiAppBar: {
    //   root: {
    //     height: '56px',
    //   },
    // },
    MuiPaper: {
      elevation4: {
        backgroundColor: 'white',
        boxShadow: 'none',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
    // MuiListItem: {
    //   root: {
    //     '&$selected': {
    //       backgroundColor: '#F2F8FA',
    //     },
    //   },
    // },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#00B2A3',
      },
    },
  },

  palette: {
    primary: {
      // main: '#F58023',
      main: '#276552',
      contrastText: 'white',
    },
    secondary: {
      main: '#ccac7c',
      contrastText: 'white',
    },
  },
  typography: {
    fontFamily: 'Georama',

    h1: {
      fontWeight: 600,
      fontSize: '80px',
      lineHeight: '112px',
      fontFamily: 'Georama',
      letterSpacing: '-1.5px',
      color: '#03002d',
    },
    h2: {
      fontWeight: 600,
      fontSize: '64px',
      lineHeight: '72px',
      fontFamily: 'Georama',
      letterSpacing: '-0.5px',
      color: '#03002d',
    },
    h3: {
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '56px',
      fontFamily: 'Georama',
      letterSpacing: '0',
      color: '#03002d',
    },
    h4: {
      fontWeight: 600,
      fontSize: '34px',
      lineHeight: '40px',
      fontFamily: 'Georama',
      letterSpacing: '0.25px',
      color: '#03002d',
    },
    h5: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      fontFamily: 'Georama',
      letterSpacing: '0',
      color: '#03002d',
    },
    h6: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '24px',
      fontFamily: 'Georama',
      letterSpacing: '0.15px',
      color: '#03002d',
    },
    button: {
      fontFamily: 'Georama',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '30px',
      letterSpacing: '1.35px',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: 'Georama',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.444444px',
      color: '#808080',
    },
    body2: {
      fontFamily: 'Georama',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      color: '#808080',
    },
  },
});
