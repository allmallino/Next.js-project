import firebase_app from "@/firebase/config";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { styled } from "styled-components";
import ButtonLink from "../ButtonLink";

const Container = styled.div`
    & button{
    width: 80%;
    display: flex;
    margin: 10px auto;
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
        return (
            <Container>
                <ButtonLink onClick={() => { selectProduct(props.tour); setBuyingState((val)=>{return !val}); }}>{buyingState?"Відмінити бронювання":"Забронювати"}</ButtonLink>
            </Container>
        )
    }

}