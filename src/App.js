import logo from './logo.svg';
import Blog from './blog/Blog';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import './App.css';

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00A0F0"
    }
  },
  typography: {
    "fontFamily": `"Proxima Nova", "Helvetica Neue"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 600,
    h1: {
      fontWeight: 600
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    h4: { // Not used
      fontWeight: 400
    },
    h5: {
      fontWeight: 400
    },
    h6: {
      fontWeight: 400
    }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Blog />
    </MuiThemeProvider>
  );
}

export default App;
