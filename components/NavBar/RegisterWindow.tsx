import { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import LoadingGif from "../LoadingGif";
import ButtonLink from "../ButtonLink";
import { TextField } from "@mui/material";


export default function RegisterWindow(props) {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(props.auth);
    const email = useRef<HTMLInputElement>();
    const password = useRef<HTMLInputElement>();
    const [registerState, changeState] = useState({ email: false, password: false, emailMessage: "", passwordMessage: "" });

    //Реєстрація користувача за паролем і поштою
    function register() {
        if (email.current.value && password.current.value) {
            createUserWithEmailAndPassword(email.current.value, password.current.value);
        } else {
            changeState({
                email: !email.current.value,
                password: !password.current.value,
                emailMessage: !email.current.value ? "Введіть пошту, будь ласка" : "",
                passwordMessage: !password.current.value ? "Введіть пароль, будь ласка" : ""
            });
        }
    }

    if (loading) {
        return (<LoadingGif />);
    }

    //Якщо виникає помилка пов'язана з введеними даними, ми показуємо відповідне повідомлення
    if (error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                if (registerState.emailMessage !== "Пошта вже зайнята")
                    changeState({ email: true, password: false, emailMessage: "Пошта вже зайнята", passwordMessage: "" });
                break;
            case "auth/invalid-email":
                if (registerState.emailMessage !== "Ви ввели не правильну пошту")
                    changeState({ email: true, password: false, emailMessage: "Ви ввели неправильну пошту", passwordMessage: "" });
                break;
            case "auth/weak-password":
                if (registerState.passwordMessage !== "Пароль повинен бути від 6 до 16")
                    changeState({ email: false, password: true, emailMessage: "", passwordMessage: "Пароль повинен бути від 6 до 16" });
                break;
        }
    }

    return (
        <>
            <Heading variant="3">Реєстрація</Heading>
            <div>
                <TextField inputRef={email} label="Пошта" fullWidth helperText={registerState.emailMessage} error={registerState.email} type="email" autoComplete={"false"} />
            </div>
            <div>
                <TextField inputRef={password} label="Пароль" helperText={registerState.passwordMessage} fullWidth error={registerState.password} type="password" inputProps={{ maxLength: 16 }} />
            </div>
            <ButtonLink onClick={register}>Зареєструватися</ButtonLink>
            {props.children}
        </>
    )
}