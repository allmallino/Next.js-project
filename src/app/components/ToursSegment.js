'use client'
import ContentCard from './ContentCard/ContentCard'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { collection, getFirestore, query, orderBy, limit } from "firebase/firestore"
import ButtonLink from './ButtonLink'
import Heading from './Heading'


export default function ToursSegment() {

    const [tours, toursLoading, toursError] = useCollection(query(collection(getFirestore(firebase_app), "tours"), orderBy("buyers"), limit(3)), []);


    if (!toursLoading && tours) {
        let ourTours = tours.docs.map((v) => { return { key: v._document.key.path.segments[v._document.key.path.segments.length - 1], ...v.data() }; });
        return (<>
            <Heading variant="2">Популярні тури</Heading>

            <section className='list'>
                {ourTours.map((v) => (<ContentCard key={v.key} href={"/tours/" + v.key} title={v.title} src={v.image} price={v.price} place={v.city + ", " + v.country} date={v.date} duration={v.duration} />))}
            </section>
            <ButtonLink href="\tours">Більше</ButtonLink>

        </>)
            ;
    }
}