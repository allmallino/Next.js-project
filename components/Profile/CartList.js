import { styled } from "styled-components"
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import Heading from "../Heading";
import CartItem from "./CartItem";
import firebase_app from "@/firebase/config";

const Container = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    gap:25px;
    width:75%;
    margin:0 auto;
    padding:15px;
`

export default function CartList(props) {
    const [cart, cartLoading, cartError] = useDocument(doc(getFirestore(firebase_app), "users", props.user.uid), []);
    if (cart) {
        return (
            <>
                <Heading variant="2">Заброньовано</Heading>
                <Container>
                    {cart.data().list.map((v) => (<CartItem id={v} key={v} />))}
                </Container>
            </>)
    }

}