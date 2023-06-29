import { styled } from "styled-components";

const Button = styled.a`
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

export default function ButtonLink(props) {

    return <Button href={props.href} onClick={props.onClick}>
        {props.children}
    </Button>
}