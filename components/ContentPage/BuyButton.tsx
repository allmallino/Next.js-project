import firebase_app from "@/firebase/config";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { styled } from "styled-components";

const Button = styled.p`
    width: 80%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    cursor: pointer;
    color: black;
    border-radius:5px;
    background-color: #FCA311;
    &:hover{
        color: white;
        background-color: #14213D;
    }`;

export default function BuyButton(props) {
    const [buyingState, setBuyingState] = useState(false);
    const [cart, cartLoading, cartError] = useDocument(doc(getFirestore(firebase_app), "users", props.user.uid));

    //На початку нам потрібно дізнатися, чи користувач вже оорендував цей тур
    useEffect(() => {
        if (cart) {
            if (cart.data().list.includes(props.tour)) {
                setBuyingState(true);
            }
        }
    }, [cart, setBuyingState, props.tour]);

    //Змінюємо статус оренди користувача на протилежний.
    //Якщо вже орендував до цього - то відміняємо бронь, якщо ні - то бронюємо. 
    async function selectProduct(product) {
        let l = cart.data().list;
        let list;
        if (buyingState) {
            list = l.filter(v => v != product);
        } else {
            list = [...l, product];
        }
        await setDoc(doc(getFirestore(firebase_app), "users", props.user.uid), { list, });
    }

    if (cart) {
        if (buyingState) {
            return (
                <Button onClick={() => { selectProduct(props.tour); setBuyingState(false); }}>Відмінити бронювання</Button>
            )
        } else {
            return (
                <Button onClick={() => { selectProduct(props.tour); setBuyingState(true); }}>Забронювати</Button>
            )
        }
    }

}