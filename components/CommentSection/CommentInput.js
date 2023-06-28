import { styled } from "styled-components";
import ButtonLink from "../ButtonLink";
import { useRef } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import firebase_app from "@/firebase/config";

const C = styled.section`
    background-color:lightgray;
    display:flex;
    align-items:center;
    padding:10px;
    justify-content:space-between;

`
const Area = styled.textarea`
    resize:vertical;
    width: 90%;
    font-size:1rem;
`
export default function CommentInput(props) {
    const textRef = useRef(0);
    if (props.user) {
        return <C>
            <Area placeholder="Текст коментаря" ref={textRef} />
            <ButtonLink onClick={async () => {
                if (textRef.current.value != "") {
                    let text = textRef.current.value;
                    textRef.current.value = "";
                    await updateDoc(doc(getFirestore(firebase_app), "tours", props.tour), { comments: [...props.comments, { text: text, nickname: props.user.email.substring(0, props.user.email.indexOf("@")) }] })
                }
            }}>Коментувати</ButtonLink>
        </C>
    }
}