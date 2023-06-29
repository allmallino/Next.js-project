import { styled } from "styled-components"
import { doc, getFirestore } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import Heading from "../Heading";
import CartItem from "./CartItem";
import firebase_app from "@/firebase/config";

//Контейнер в якому будуть зберігатися заброньовані користувачем карточки 
const Container = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr;
    box-sizing:border-box;
    align-items:center;
    gap:25px;
    width:75%;
    margin:0 auto;
    padding:15px;

    @media screen and (max-width:900px) {
        width:100%;
        gap:15px;
        padding:10px;
    }
`;

export default function CartList(props) {
    const [cart, cartLoading, cartError] = useDocument(doc(getFirestore(firebase_app), "users", props.user.uid), []);
    if (cart) {
        return <>
            <Heading variant="2">Заброньовано</Heading>
            <Container>
                {cart.data().list.map((v) => (<CartItem id={v} key={v} />))}
            </Container>
        </>
    }

}