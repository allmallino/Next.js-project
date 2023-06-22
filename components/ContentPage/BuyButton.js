import { styled } from "styled-components";

const Button = styled.a`
    text-decoration:none;
    color:White;
    background-color:burlywood;
    width:80%;
    padding:10px 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px auto;

    &:hover{
        color:white;
        background-color:brown;
    }`;

export default function BuyButton(props) {

    return (
        <Button href={props.href} >{props.children}</Button>
    )
}