import { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import { css, styled } from 'styled-components';
import LoadingGif from "../LoadingGif";

//Місце вводу пошти і пароля для реєстрації
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
    box-sizing: border-box;
    text-align: center;
`;

const ErrorLable = styled.label`
    font-size:0.75rem;
    color:red;
    margin:0;
`;

export default function RegisterWindow(props) {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(props.auth);
    const email = useRef(0);
    const password = useRef(0);
    const [registerState, changeState] = useState({ email: false, password: false, message: "" });

    //Реєстрація користувача за паролем і поштою
    function register() {
        if (email.current.value && password.current.value) {
            createUserWithEmailAndPassword(email.current.value, password.current.value);
        }
    }

    if (loading) {
        return (<LoadingGif />);
    }

    //Якщо виникає помилка пов'язана з введеними даними, ми показуємо відповідне повідомлення
    if (error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                if (registerState.message !== "Пошта вже зайнята")
                    changeState({ email: true, password: false, message: "Пошта вже зайнята" });
                break;
            case "auth/invalid-email":
                if (registerState.message !== "Ви ввели не правильну пошту")
                    changeState({ email: true, password: false, message: "Ви ввели не правильну пошту" });
                break;
            case "auth/weak-password":
                if (registerState.message !== "Пароль повинен бути від 6 до 16")
                    changeState({ email: false, password: true, message: "Пароль повинен бути від 6 до 16" });
                break;
        }
    }

    return (
        <>
            <Heading variant="3">Реєстрація</Heading>
            <div>
                <label>Пошта</label>
                <Input ref={email} invalid={registerState.email.toString()} type="email" autoComplete={false} />
                <ErrorLable>{registerState.email ? registerState.message : ""}</ErrorLable>
            </div>
            <div>
                <label>Пароль</label>
                <Input ref={password} invalid={registerState.password.toString()} type="password" maxLength="16" />
                <ErrorLable>{!registerState.email ? registerState.message : ""}</ErrorLable>
            </div>
            <button onClick={register}>Зареєструватися</button>
            {props.children}
        </>
    )
}