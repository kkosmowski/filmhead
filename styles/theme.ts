import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito-sans';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: '"Nunito Sans", serif',
    h1: {
      fontSize: '3rem'
    }
  }
});

export default lightTheme;