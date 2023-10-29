import { styled } from "styled-components";
import { useRef } from "react";
import {getFirestore, addDoc, collection } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import ButtonLink from "../ButtonLink";

const C = styled.section`
    background-color:lightgray;
    display:flex;
    align-items:center;
    padding:10px;
    justify-content:space-around;
    gap:10px;
`;

const Area = styled.textarea`
    resize:none;
    width: 90%;
    font-size:1rem;
    
    @media screen and (max-width:1400px) {
        resize:vertical;
        max-height:80px;
    }
`;

export default function CommentInput(props) {
    const textRef = useRef<HTMLTextAreaElement>();
    if (props.user) {
        return <C>
            <Area maxLength={250} placeholder="Текст коментаря" ref={textRef} />
            <ButtonLink onClick={async () => {
                //Додає новий коментар в масив коментарів
                if (textRef.current.value.length >= 4) {
                    let text = textRef.current.value;
                    textRef.current.value = "";
                    await addDoc(collection(getFirestore(firebase_app), "comments"), {id_tour:props.tour, text: text, date: (new Date(Date.now())).toLocaleDateString(), nickname: props.user['displayName']?props.user['displayName']:props.user['email'].substring(0, props.user['email'].indexOf("@")), image:props.user.photoURL});
                } else {
                    alert("Вибачте, але користувачі можуть залишати коментарі мінімальною довжиною 4 символи")
                }
            }}>Коментувати</ButtonLink>
        </C >
    }
}