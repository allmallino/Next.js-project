import Link from "next/link";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const theme = createTheme({
    palette: {
        primary: {
          main: '#FCA311',
          light: '#ffaf2e',
          dark: '#ca810c',
          contrastText: '#333333',
        },
      },
      typography:{
        fontFamily:'__Inter_a64ecd, __Inter_Fallback_a64ecd'
      }
})


export default function ButtonLink({href, children, onClick}:{children:any, href?:string, onClick?:React.MouseEventHandler}) {

    return (
    <ThemeProvider theme={theme}>
        {href?(
            <Link href={href}>
                <Button variant="contained" color="primary" onClick={onClick}  sx={{ textTransform: 'capitalize'}}>{children}</Button>
            </Link>
        ):(
            <Button variant="contained" color="primary" onClick={onClick} sx={{ textTransform: 'capitalize'}}>{children}</Button>
        )}
        
    </ThemeProvider>
    )
}