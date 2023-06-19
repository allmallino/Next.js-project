import { styled } from "styled-components"
import ContentCard from './ContentCard/ContentCard'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { collection, getFirestore } from "firebase/firestore"

const Section = styled.section`
    display: grid;
    grid-template-columns:auto auto auto;
    justify-content:space-around;
    grid-gap:25px; 
    margin: 0 auto;
    width: 95%;
    padding: 10px 0;
    background-color: lightgray;
  `
export default function ToursTable() {
    const [tours, toursLoading, toursError] = useCollection(collection(getFirestore(firebase_app), "tours"), []);
    let ourTours;
    if (!toursLoading && tours) {
        ourTours = tours.docs.map((v) => { return { key: v._document.key.path.segments[v._document.key.path.segments.length - 1], ...v.data() }; });
    }
    if (ourTours) {
        return (
            <Section>
                {ourTours.map((v) => (<ContentCard key={v.key} href={"/tours/" + v.key} title={v.title} src={v.image} price={v.price} place={v.city + ", " + v.country} date={v.date} duration={v.duration} />))}
            </Section>);
    }
}