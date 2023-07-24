import { styled } from "styled-components"
import { doc, getFirestore } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import ContentImage from "../ContentCard/ContentImage"
import Heading from "../Heading"
import Link from "next/link"
import firebase_app from "@/firebase/config";

//Горизонтальна карточка
const Card = styled(Link)`
    height:150px;
    background-color:white;
    color:black;
    text-decoration:none;
    display:grid;
    grid-template-columns: 1fr 2fr;
    gap:5px;
    padding-right:5px;
    align-items:center;
    box-shadow: 2px 2px 10px black;
    border:1px solid black;
    border-radius:5px;
    overflow:hidden;
    cursor: pointer;

    &:hover img {
            transform:scale(1.2);
            transition:0.5s;
    }

    @media screen and (max-width:768px) {
        height:100px;
    }
`;

export default function CartItem(props) {
    const [tour, tourLoading, tourError] = useDocument(doc(getFirestore(firebase_app), "tours-thumbnails", props.id), []);
    if (tour) {
        return <Card href={"/tours/" + props.id}>
            <ContentImage alt={tour.data().title} src={tour.data().image} variant="horizontal" />
            <Heading variant="3" >{tour.data().title}</Heading>
        </Card>
    }

}