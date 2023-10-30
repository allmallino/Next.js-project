import { useState } from "react";
import { User, getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import dynamic from "next/dynamic"
import { styled } from "styled-components";
import firebase_app from '@/firebase/config';
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const Popup = dynamic(() => import("reactjs-popup"));
const LoginWindow = dynamic(() => import("./LoginWindow"));
const RegisterWindow = dynamic(() => import("./RegisterWindow"));
const UserInteractionWindow = dynamic(() => import("./UserInteractionWindow"));
const LoginWithGoogleButton = dynamic(() => import("./LoginWithGoogleButton"));

//Текст, що відтворюватиме дію при натисканні
const P = styled.p`
    padding: 15px 25px;
    min-width:100px;
    text-align:center;
    border-left: 1px solid black;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: #b2b2b2;
        transition: all 0.5s;
    }
    
    @media screen and (max-width:768px) {
        padding: 15px 15px;
    }
`;

//Контейнер, в якому буде знаходитися інтерфейс авторизації
const Container = styled.div`
    width:15vw;
    height:450px;
    background-color:#E5E5E5;
    text-align:center;
    border-radius:5px;
    display:grid;
    position:relative;
    grid-template-rows: 1.5fr 1fr 1fr 0.8fr 0.5fr 0.8fr;
    padding:20px 15px;
    row-gap:25px;
    box-shadow: 5px 5px 15px black;

    @media screen and (max-height:500px) {
        height:345px;
        max-height:90vh;
        margin-top:55px;
        row-gap:15px;
    }

    @media screen and (max-width:1400px) {
        width:25vw
    }

    @media screen and (max-width:768px) {
        width:65vw
    }
`;

//Текст при натисканні на який, користувач змінює режим (з авторизації на логін, і навпаки)
const Link = styled.p`
    margin-top:0;
    color:#14213D;
    cursor: pointer;

    &:hover{
        color:#FCA311;
    }

    &::selection{
        background-color:empty;
    }
`;


const auth = getAuth(firebase_app);

export default function NavAuthButton() {
    const [previousUser, loading, error] = useAuthState(auth);
    const [loginState, setState] = useState(true);
    const [user, setUser] = useState<User>();

    //Створюємо лист замовлень, в який ми будемо додавати нові тури, які забронював користувач
    async function createList() {
        let state = (await getDoc(doc(getFirestore(firebase_app), "users", user['uid']))).data();
        if (typeof state === "undefined") {
            let list = [];
            await setDoc(doc(getFirestore(firebase_app), "users", user['uid']), { list, });
        }
    }

    //Зміна стану авторизації на стан реєстрації, і навпаки
    function changeState() {
        setState((s) => { return !s; });
    }

    if (error) {
        console.log(error.message);
    }

    if (!user && previousUser) {
        setUser(previousUser);
    }

    //Якщо користувач вже до цього не авторизовувався, ми показуємо кнопку Увійти, де він може або авторизуватися, або створити новий акаунт
    if (!user) {
        let content;

        if (loginState) {
            //Стан авторизації
            content = (<LoginWindow selectUser={setUser} auth={auth}>
                <Link onClick={changeState}>{loginState ? "Не маєте аккаунту?" : "Вже маєте аккаунт?"}</Link>
                <LoginWithGoogleButton auth={auth} selectUser={setUser} />
            </LoginWindow>)
        } else {
            //Стан реєстрації
            content = (<RegisterWindow selectUser={setUser} auth={auth}>
                <Link onClick={changeState}>{loginState ? "Не маєте аккаунту?" : "Вже маєте аккаунт?"}</Link>
                <LoginWithGoogleButton auth={auth} selectUser={setUser} />
            </RegisterWindow>)
        }

        return (<Popup trigger={<P>Увійти</P>} modal>
            <Container>
                {content}
            </Container>
        </Popup>)

    } else {
        //Якщо ми змогли підтягнути дані користувача, ми його авторизуємо і даємо можливість подивитися його профіль, або вийти з акаунту
        createList();
        return (
            <Popup trigger={<P>{user['displayName']?user['displayName']:user['email'].substring(0, user['email'].indexOf("@"))}</P>} position={"bottom center"} on="hover" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={0} arrow={false}>
                <UserInteractionWindow selectUser={setUser} auth={auth} />
            </Popup>
        );
    }
}