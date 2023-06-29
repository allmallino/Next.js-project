import { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Heading from "../Heading";
import { styled } from 'styled-components';
import LoadingGif from "../LoadingGif";

//Місце вводу пошти і пароля для реєстрації
const Input = styled.input`
    width:100%;
    height:35px;
    border-radius: 4px;
    border: 2px solid black;
    box-sizing:border-box;
    text-align:center;
`;

export default function RegisterWindow(props) {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(props.auth);
    const email = useRef(0);
    const password = useRef(0);

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
        console.log(error.code);
        switch (error.code) {
            case "auth/email-already-in-use":
                alert("Користувач з такою поштою вже зареєстрований. Можливо ви хотіли авторизуватися");
                break;
            case "auth/invalid-email":
                alert("Ви ввели не правильну пошту. Спробуйте знову");
                break;
        }
    }

    return (
        <>
            <Heading variant="3">Реєстрація</Heading>
            <div>
                <label>Пошта</label>
                <Input ref={email} type="email" />
            </div>
            <div>
                <label>Пароль</label>
                <Input ref={password} type="password" maxLength="16" minLength="6" />
            </div>
            <button onClick={register}>Зареєструватися</button>
            {props.children}
        </>
    )
}