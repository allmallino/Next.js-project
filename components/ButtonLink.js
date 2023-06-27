import { styled } from "styled-components";

const Button = styled.a`
    text-decoration:none;
    color:White;
    background-color:burlywood;
    text-align:center;
    padding:5px;
    cursor: pointer;

    &:hover{
        color:white;
        background-color:brown;
    }`;

export default function ButtonLink(props) {

    return (
        <Button className="button-link" href={props.href} onClick={props.onClick}>{props.children}</Button>
    )
}