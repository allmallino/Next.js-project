import { styled } from "styled-components"
import ProfileLogo from "./ProfileLogo"
import Heading from "../Heading"

const Container = styled.div`
    display:grid;
    grid-template-columns: auto 2fr;
    background-color:#E5E5E5;
    padding:25px;
    box-sizing:border-box;
    margin:10px auto 25px auto;
    width:75%;
    border-radius:5px;
    
    @media screen and (max-width:768px) {
        width:100%;
    }
`;

const InfoDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding:25px 0;
`;

const I = styled.i`
    text-align:center;
`;

export default function ProfileInformation(props) {
    return <Container>

        <ProfileLogo nickname={props.user.email} image={props.user.photoURL} size="150px" />
        <InfoDiv>
            <Heading variant="3">{props.user['displayName']?props.user['displayName']:props.user['email'].substring(0, props.user['email'].indexOf("@"))}</Heading>
            <I>{props.user.email}</I>
        </InfoDiv>
    </Container>
}