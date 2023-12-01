import { styled } from "styled-components";

//Контейнер, в якому буде знаходитися назва туру
const Container = styled.p`
    position:relative;
    display:inline;
    padding:10px 0;
    top:16px;
    margin-bottom:16px;
    width:max-content;
    color:black;
    font-size:2rem;
    font-weight:600;
`

//Розташування туру, яке буде знаходитися під назвою
const Locate = styled.i`
    display:block;
    position:relative;
    top:16px;
    margin-bottom:36px;
`
export default function ContentTitle(props) {

    return <>
        <Container>
            {props.children}
        </Container>
        <Locate>{props.location}</Locate>
    </>
}