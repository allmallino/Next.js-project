import firebase_app from "@/firebase/config";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { css, styled } from "styled-components";

const Button = styled.a`
    text-decoration:none;
    width: 80%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    cursor: pointer;
    ${(props => {
        switch (props.buying) {
            case 'true':
                return css`
                    color: black;
                    background-color: argb(0,0,0,0);
                    border:1px solid black;`;
            case 'false':
                return css`
                    color: white;
                    background-color: burlywood;
                    border:1px solid burlywood;`;
        }
    })
    }
    &:hover{
        color: white;
        background-color: brown;
    }`;

export default function BuyButton(props) {
    const [buyingState, setBuyingState] = useState(false);
    const [cart, cartLoading, cartError] = useDocument(doc(getFirestore(firebase_app), "users", props.user.uid), []);

    useEffect(() => {
        if (cart) {
            if (cart.data().list.includes(props.tour)) {
                setBuyingState(true);
            }
        }
    }, [cart, setBuyingState, props.tour]);

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
                <Button buying='true' onClick={() => { selectProduct(props.tour); setBuyingState(false); }}>Відмінити бронювання</Button>
            )
        } else {
            return (
                <Button buying='false' onClick={() => { selectProduct(props.tour); setBuyingState(true); }}>Забронювати</Button>
            )
        }
    }

}