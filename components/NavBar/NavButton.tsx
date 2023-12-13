import Link from "next/link";
import { styled, css } from "styled-components";

interface Props{
    variant?:string
}
//Посилання на іншу сторінку, стилізована під кнопку в панелі
const L = styled(Link)<Props>`
    padding: 15px 25px;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    position: relative;
    border-radius: 5px;

    &:hover{
        background-color: #b2b2b2;
    }

    ${(props => {
        if(props.variant==="active"){
            return css`
                &::after{
                    position: absolute;
                    content: '';
                    height: 2px;
                    bottom: 0px;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    width: 50%;
                    background: black; 
                }
            `;
        }})}

    @media screen and (max-width:768px) {
        padding: 15px 15px;
    }
`;



export default function NavButton(props) {

    return <L variant={props.variant} href={props.href}>
        {props.children}
    </L>;
}