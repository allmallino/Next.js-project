import { useState } from "react";
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Popup from "reactjs-popup";
import { styled } from "styled-components";
import firebase_app from '@/firebase/config';
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";
import UserInteractionWindow from "./UserInteractionWindow";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const P = styled.p`
    padding: 15px 25px;
    border-left: 1px solid black;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: gray;
        transition: all 0.5s;
    }`;
const Container = styled.div`
    width:15vw;
    height:50vh;
    background-color:lightgray;
    text-align:center;
    border-radius:5px;
    display:grid;
    padding:25px 15px;
    row-gap:25px;
`;
const Link = styled.p`
    margin-top:0;
    color:blue;
    cursor: pointer;


    &:hover{
        color:brown;
    }
`;


const auth = getAuth(firebase_app);

export default function NavAuthButton() {
    const [previousUser, loading, error] = useAuthState(auth);
    const [loginState, setState] = useState(true);
    const [user, setUser] = useState("");

    async function createList() {
        let state = (await getDoc(doc(getFirestore(firebase_app), "users", user.uid))).data();
        if (typeof state === "undefined") {
            let list = [];
            await setDoc(doc(getFirestore(firebase_app), "users", user.uid), { list, });
        }
    }

    function changeState() {
        setState((s) => { return !s; });
    }

    if (error) {
        console.log(error.message);
    }

    if (!user && previousUser) {
        setUser(previousUser);
    }

    if (!user) {
        let content;

        if (loginState) {
            content = (<LoginWindow selectUser={setUser} auth={auth} />)
        } else {
            content = (<RegisterWindow selectUser={setUser} auth={auth} />)
        }
        return (<Popup trigger={<P>Увійти</P>} modal>
            <Container>
                {content}
                <Link onClick={changeState}>{loginState ? "Не маєте аккаунту?" : "Вже маєте аккаунт?"}</Link>
                <LoginWithGoogleButton auth={auth} selectUser={setUser} />
            </Container>
        </Popup>)
    } else {
        createList();
        return (
            <Popup trigger={<P>{user.email.substring(0, user.email.indexOf("@"))}</P>} position="bottom" on="hover" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={0} arrow={false}>
                <UserInteractionWindow selectUser={setUser} auth={auth} />
            </Popup>
        );
    }
}