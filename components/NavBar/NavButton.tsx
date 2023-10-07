import Link from "next/link";
import { styled, css } from "styled-components";

interface Props{
    variant?:string
}
//Посилання на іншу сторінку, стилізована під кнопку в панелі
const L = styled(Link)<Props>`
    padding: 15px 25px;
    border-right: 1px solid black;
    text-decoration: none;
    color: black;
    transition: all 0.5s;

    ${(props => {
        if(props.variant==="active"){
            return css`
            cursor:default;
            background-color: #a9a9a9;
            `;
        }else{
            return css`
            &:hover{
                background-color: #b2b2b2;
            }
            `;
        }
        })}

    @media screen and (max-width:768px) {
        padding: 15px 15px;
    }
`;



export default function NavButton(props) {

    return <L variant={props.variant} href={props.href} onClick={props.onClick}>
        {props.children}
    </L>;
}