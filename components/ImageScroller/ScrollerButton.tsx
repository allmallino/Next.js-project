'use client';
import { css, styled } from "styled-components";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import IconButton from "@mui/material/IconButton/IconButton";
interface Props{
    variant:string
} 
//Кнопка, за допомогою якої користувач може перемикати сторінки в скроллері
const Button = styled(IconButton)<Props>`
    position:absolute;
    z-index:2;
    background-color:#E5E5E5;
    top:50%;
    font-size:30px;
    color:black;
    ${(props => {
        switch (props.variant) {
            case 'left':
                return css`
                    left:2%; 
                    transform:rotate(180deg);`;
            case 'right':
                return css`right:2%;`;
        }
    })
    }

    &:hover{
        background-color:#b2b2b2;
    }

    @media screen and (max-width:768px) {
        width:20px;
        height:20px;
    }
`;

export default function ScrollerButton(props) {
    return (
        <Button variant={props.variant} aria-label={props.variant} onClick={props.onClick}>
            <ArrowForwardRoundedIcon fontSize="inherit" color="inherit"/>
        </Button>
    );
}