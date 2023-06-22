import { styled } from "styled-components";
import Heading from "../Heading";

const Container = styled.div`
    position:relative;
    display:block;
    z-index:2;
    margin:-25px auto 0 auto;
    padding:10px 5px;
    width:max-content;
    border-radius:5px;
    text-align:center;
    background-color:lightgray;
    color:black;
    font-size:1.5rem;
    font-weight:600;
`

const Locate = styled.i`
    display:block;
    text-align:center;
    margin:0 auto;
`
export default function ContentTitle(props) {

    return <>
        <Container>
            {props.children}
        </Container>
        <Locate>{props.location}</Locate>
    </>
}