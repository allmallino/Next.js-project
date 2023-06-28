import { styled } from "styled-components"
import ProfileLogo from "./ProfileLogo"
import Heading from "../Heading"

const Container = styled.div`
    display:grid;
    grid-template-columns: auto auto;
    background-color:lightgray;
    padding:25px;
`

const InfoDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const I = styled.i`
    text-align:center;
`

export default function ProfileInformation(props) {
    return <Container>
        <ProfileLogo nickname={props.user.email} size="150px" />
        <InfoDiv>
            <Heading variant="3">{props.user.email.substring(0, props.user.email.indexOf("@"))}</Heading>
            <I>{props.user.email}</I>
        </InfoDiv>
    </Container>
}