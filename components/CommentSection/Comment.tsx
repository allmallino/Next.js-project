import { styled } from "styled-components"
import ProfileLogo from "../Profile/ProfileLogo"

const C = styled.section`
    padding:15px 10px;
    display:grid;
    grid-template-columns:auto 2fr;
    column-gap:15px;
    border:1px solid lightgray;
    border-radius:5px;
    margin:10px;
    overflow:hidden;
`;

//Нікнейм користувача, що написав коментар
const T = styled.h3`
    margin-top:0;
    margin-bottom:10px;
`;

//Текст коментаря
const P = styled.p`
    margin:0;
    font-size:1rem;
`;

//Дата коментаря
const I = styled.i`
    display:block;
    color:gray;
    font-size:0.75rem;
    margin-top:-10px;
    margin-bottom:10px;
`;

export default function Comment(props) {
    return <C>
        <ProfileLogo nickname={props.nickname} size="50px" image={props.image} />
        <div>
            <T>{props.nickname}</T>
            <I>{props.date}</I>
            <P>{props.text}</P>
        </div>
    </C>
}