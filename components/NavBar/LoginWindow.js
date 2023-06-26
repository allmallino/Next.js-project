import { useRef } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import { styled } from 'styled-components';

const Input = styled.input`
        width:100%;
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        box-sizing:border-box;
        text-align:center;
    `

export default function LoginWindow(props) {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(props.auth);
    const email = useRef(0);
    const password = useRef(0);

    function login() {
        if (email.current.value && password.current.value) {
            signInWithEmailAndPassword(email.current.value, password.current.value);
        }
    }

    if (user) {
        console.log(user);
        props.selectUser(user);
    }
    if (loading) {
        return (<p>Завантаження</p>);
    }
    if (error) {
        switch (error.code) {
            case "auth/user-not-found":
                alert("Користувача з такою поштою не існує. Можливо ви хотіли зареєструватися");
                break;
            case "auth/wrong-password":
                alert("Ви ввели не правильний пароль. Спробуйте знову");
                break;
        }
    }
    return (
        <>
            <Heading variant="3">Логін</Heading>
            <div>
                <label>Пошта</label>
                <Input ref={email} type="email" autoComplete={"true"} />
            </div>
            <div>
                <label>Пароль</label>
                <Input ref={password} type="password" maxLength="16" minLength="6" />
            </div>
            <button onClick={login}>Увійти</button>
        </>
    )
}