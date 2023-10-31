import { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import LoadingGif from "../LoadingGif";
import ButtonLink from "../ButtonLink";
import { TextField } from "@mui/material";

export default function LoginWindow(props) {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(props.auth);
    const email = useRef<HTMLInputElement>();
    const password = useRef<HTMLInputElement>();
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
                if (loginState.emailMessage !== "Користувача з такою поштою не існує")
                    changeState({ email: true, password: false, emailMessage: "Користувача з такою поштою не існує", passwordMessage: "" });
                break;
            case "auth/wrong-password":
                if (loginState.passwordMessage !== "Ви ввели неправильний пароль")
                    changeState({email: false, password: true, emailMessage: "", passwordMessage: "Ви ввели не правильний пароль" });
                break;
        }
    }
    return (
        <>
            <Heading variant="3">Логін</Heading>
            <div>
                <TextField inputRef={email} label="Пошта" fullWidth helperText={loginState.emailMessage} error={loginState.email} type="email" autoComplete={"false"} />
            </div>
            <div>
                <TextField inputRef={password} label="Пароль" helperText={loginState.passwordMessage} fullWidth error={loginState.password} type="password" inputProps={{ maxLength: 16 }}/>
            </div>
            <ButtonLink onClick={login}>Увійти</ButtonLink>
            {props.children}
        </>
    )
}