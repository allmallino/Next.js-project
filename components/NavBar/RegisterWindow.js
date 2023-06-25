import { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import { styled } from 'styled-components';
import LoginWithGoogleButton from "./LoginWithGoogleButton";

const Input = styled.input`
        width:100%;
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        box-sizing:border-box;
        text-align:center;
    `


export default function RegisterWindow(props) {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(props.auth);
    const email = useRef(0);
    const password = useRef(0);

    function register() {
        if (email.current.value && password.current.value) {
            try {
                createUserWithEmailAndPassword(email.current.value, password.current.value);
            } catch (e) {
                alert(e);
            }
        }
    }



    if (user) {
        props.selectUser(user);
    }
    if (loading) {
        return (<p>Завантаження</p>);
    }
    if (error) {
        if (error.code === "auth/email-already-in-use") {
            alert("Користувач з такою поштою вже зареєстрований. Можливо ви хотіли авторизуватися");
        }
    }
    return (
        <>
            <Heading variant="3">Реєстрація</Heading>
            <div>
                <label>Пошта</label>
                <Input ref={email} type="email" autoComplete={"true"} />
            </div>
            <div>
                <label>Пароль</label>
                <Input ref={password} type="password" maxLength="16" minLength="6" />
            </div>
            <button onClick={register}>Зареєструватися</button>
            <LoginWithGoogleButton auth={props.auth} selectUser={props.selectUser} />

        </>
    )
}