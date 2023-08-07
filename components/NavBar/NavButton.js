import Link from "next/link";
import { styled } from "styled-components";

//Посилання на іншу сторінку, стилізована під кнопку в панелі
const L = styled(Link)`
    padding: 15px 25px;
    border-right: 1px solid black;
    text-decoration: none;
    color: black;
    transition: all 0.5s;

    &:hover{
        background-color: #b2b2b2;
        transition: all 0.5s;
    }

    @media screen and (max-width:768px) {
        padding: 15px 15px;
    }
`;

export default function NavButton(props) {

    return <L href={props.href}>
        {props.children}
    </L>;
}