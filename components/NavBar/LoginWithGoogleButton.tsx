import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { LoadingButton } from "@mui/lab";

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
            <LoadingButton variant="contained" loading sx={{ textTransform: 'capitalize'}}>
                Увійти через Google
            </LoadingButton>
        </ThemeProvider>);
    }

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => { signInWithGoogle() }} startIcon={<GoogleIcon/>} sx={{ textTransform: 'capitalize'}}>
                Увійти через Google
            </Button>
        </ThemeProvider>);
}