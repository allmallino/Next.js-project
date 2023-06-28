import { styled } from "styled-components"
import ProfileLogo from "../Profile/ProfileLogo"
import CommentTitle from "./CommentTitle"
import CommentText from "./CommentText"

const C = styled.section`
    padding:25px 15px;
    display:grid;
    grid-template-columns:auto 2fr;
    column-gap:15px;
    border:1px solid lightgray;
    border-radius:5px;
    margin-bottom:10px;
`
export default function Comment(props) {
    return <C>
        <ProfileLogo nickname={props.nickname} size="50px" />
        <div>
            <CommentTitle text={props.nickname} />
            <CommentText text={props.text} />
        </div>

    </C>
}