import { styled } from "styled-components"
import dynamic from "next/dynamic"

const Comment = dynamic(() => import("./Comment"));

const Container = styled.div`
    width:100%;
    background-color:white;
    padding:10px 0;
`
const I = styled.i`
    display:block;
    text-align:center;
`
export default function CommentSection(props) {
    if (props.comments.length >= 1) {
        return <Container>
            {/* Створює коментарі з завантаженої інформації*/}
            {props.comments.map((v, i) => (<Comment nickname={v.nickname} text={v.text} date={v.date} image={v.image} key={i} />))}
        </Container>
    } else {
        return <Container>
            <I>Коментарів ще немає...</I>
        </Container>
    }

}