import { styled } from "styled-components"

const P = styled.h1`
    margin-top:10px;
    margin-bottom:10px;
`;

export default function CommentTitle(props) {
    return <P>{props.text}</P>
}