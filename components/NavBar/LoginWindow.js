import { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import { css, styled } from 'styled-components';
import LoadingGif from "../LoadingGif";

//Місце вводу пошти і пароля для авторизації
const Input = styled.input`
    width:100%;
    height:35px;
    border-radius: 4px;
    margin-bottom:0;
    ${(props => {
        if (props.invalid === "true") {
            return css`
                border: 2px solid red;
            `;
        } else {
            return css`
                border: 2px solid black;
            `;
        }
    })
    };
    box-sizing:border-box;
    text-align:center;
`;

const ErrorLable = styled.label`
    font-size:0.75rem;
    color:red;
    margin:0;
`;

export default function LoginWindow(props) {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(props.auth);
    const email = useRef(0);
    const password = useRef(0);
    const [loginState, changeState] = useState({ email: false, password: false, emailMessage: "", passwordMessage: "" });

    //Аторизація користувача
    function login() {
        if (email.current.value && password.current.value) {
            signInWithEmailAndPassword(email.current.value, password.current.value);
        } else {
            changeState({
                email: !email.current.value,
                password: !password.current.value,
                emailMessage: !email.current.value ? "Введіть пошту, будь ласка" : "",
                passwordMessage: !password.current.value ? "Введіть пароль, будь ласка" : ""
            });
        }
    }

    //Якщо користувач авторизувався, ми передаємо про нього інформацію в батьківський об'єкт
    if (user) {
        props.selectUser(user);
    }
    if (loading) {
        return (<LoadingGif />);
    }
    //Якщо виникає помилка пов'язана з введеними даними, ми показуємо відповідне повідомлення
    if (error) {
        switch (error.code) {
            case "auth/user-not-found":
                if (loginState.message !== "Користувача з такою поштою не існує")
                    changeState({ email: true, password: false, emailMessage: "Користувача з такою поштою не існує", passwordMessage: "" });
                break;
            case "auth/wrong-password":
                if (loginState.message !== "Ви ввели не правильний пароль")
                    changeState({ email: false, password: true, emailMessage: "", passwordMessage: "Ви ввели не правильний пароль" });
                break;
        }
    }
    return (
        <>
            <Heading variant="3">Логін</Heading>
            <div>
                <label>Пошта</label>
                <Input ref={email} invalid={loginState.email.toString()} type="email" autoComplete={true} />
                <ErrorLable>{loginState.emailMessage}</ErrorLable>
            </div>
            <div>
                <label>Пароль</label>
                <Input ref={password} invalid={loginState.password.toString()} type="password" maxLength="16" />
                <ErrorLable>{loginState.passwordMessage}</ErrorLable>
            </div>
            <button onClick={login}>Увійти</button>
            {props.children}
        </>
    )
}