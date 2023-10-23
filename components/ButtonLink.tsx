import { styled } from "styled-components";
import Link from "next/link";

const Button = styled(Link)`
    text-decoration:none;
    color:black;
    background-color:#FCA311;
    text-align:center;
    padding:5px 10px;
    cursor: pointer;
    border-radius:5px;

    &:hover{
        color:white;
        background-color:#14213D;
    }
`;


export default function ButtonLink(props: any) {

    return (<Button href={ props.href }> { props.children }</Button>)
}