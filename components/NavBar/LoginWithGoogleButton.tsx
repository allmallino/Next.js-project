import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
    palette: {
        primary: {
          main: '#ffffff',
          light: '#ffffff',
          dark: '#bbbbbb',
          contrastText: '#000000',
        },
      },
      typography:{
        fontFamily:'__Inter_a64ecd, __Inter_Fallback_a64ecd'
      }
})

export default function LoginWithGoogleButton(props) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(props.auth);

    if (loading) {
        return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" disabled onClick={() => { signInWithGoogle() }}>
                Увійти через Google
            </Button>
        </ThemeProvider>);
    }

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => { signInWithGoogle() }}>
                Увійти через Google
            </Button>
        </ThemeProvider>);
}