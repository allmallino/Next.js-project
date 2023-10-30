"use client"

import { useWindowScroll } from "react-use";
import { css, styled } from "styled-components";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
          main: '#000000',
          light: '#414040',
          contrastText: '#FFFFFF',
        },
      }
    });


const C = styled(IconButton)`
    position:fixed;
    top:calc(100vh - 64px);
    right:10px;
    z-index: 99999;
    transition: 0.5s all;
    ${(props => {
        if (props.hidden) {
            return css`opacity:0;`;
        } else {
            return css`opacity:1;`;
        }
    })
    }


@media screen and(max-width: 768px) {
    top: calc(100vh - 35px);
}
`;


export default function ButtonToUp() {
    const { x, y } = useWindowScroll();

    return <ThemeProvider theme={theme}>
        <C onClick={() => { window.scrollTo(0, 0); }} hidden={y >= 1 ? false : true} aria-label="up" sx={{ fontSize: 40 }} size="large">
            <ArrowUpwardRoundedIcon color="primary" fontSize="inherit"/>
        </C>
    </ThemeProvider>
    

}