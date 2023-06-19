import Link from "next/link";
import { styled } from "styled-components";

const L = styled(Link)`
    padding: 15px 25px;
    border-right: 1px solid black;
    text-decoration: none;
    color: black;
    transition: all 0.5s;

    &:hover{
        background-color: gray;
        transition: all 0.5s;
    }
    `;

export default function NavButton(props) {

    return (
        <L href={props.href}>
            {props.children}
        </L>
    );
}