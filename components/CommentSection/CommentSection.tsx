import { styled } from "styled-components"
import dynamic from "next/dynamic"
import {collection, getFirestore, orderBy, query, where} from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { useCollectionOnce } from "react-firebase-hooks/firestore";

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
    const [comments, commentsLoading, commentsError] = useCollectionOnce(query(collection(getFirestore(firebase_app), "comments"), where("id_tour","==",props.tour)));
    if(comments && !commentsLoading){
        if (comments.docs.length >= 1) {
            return <Container>
                {/* Створює коментарі з завантаженої інформації*/}
                {comments.docs.map((v, i) => (<Comment nickname={v.data()['nickname']} text={v.data()['text']} date={v.data()['date']} image={v.data()['image']} key={i} />))}
            </Container>
        } else {
            return <Container>
                <I>Коментарів ще немає...</I>
            </Container>
        }
    }else {
        return <Container>
            <I>Завантаження</I>
        </Container>
    }
}