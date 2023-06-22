import { styled } from "styled-components"

const P = styled.p`
    font-size:1.25rem;
`
export default function ContentText(props) {

    return <P>{props.children}</P>
}