import { styled } from "styled-components"
import Comment from "./Comment"

const Container = styled.div`
    width:100%;
    background-color:white;
    padding:10px;
`
const I = styled.i`
    display:block;
    text-align:center;
`
export default function CommentSection(props) {
    if (props.comments.length >= 1) {
        return <Container>
            {props.comments.map((v, i) => (<Comment nickname={v.nickname} text={v.text} key={i} />))}
        </Container>
    } else {
        return <Container>
            <I>Коментарів ще немає...</I>
        </Container>
    }

}