'use client'
import ContentCard from './ContentCard/ContentCard'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { collection, getFirestore, query, orderBy, limit } from "firebase/firestore"
import ButtonLink from './ButtonLink'
import Heading from './Heading'
import { styled } from 'styled-components'

const D = styled.div`
    position:relative;

    & > a{
        margin-top:10px;
        position:absolute;
        left:50%;
        transform: translate(-50%, -50%);
    }
`;

const S = styled.section`
    position:relative;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 75%;
    padding: 0 0 25px 0;
    
    @media screen and (max-width:1400px) {
        width: max-content;
        gap: 15px;
        padding: 10px auto;
    }
    
    @media screen and (max-width:768px) {
        flex-wrap:wrap;
        width: 100%;
    }

    @media screen and (max-width:500px) {
        padding: 10px auto;
        width: max-content;
        flex-direction: column;
    }
`;

export default function ToursSegment() {

    const [tours, toursLoading, toursError] = useCollectionOnce(query(collection(getFirestore(firebase_app), "tours-thumbnails"), orderBy("buyers"), limit(3)), []);

    if (!toursLoading && tours) {
        let ourTours = tours.docs.map((v) => { return { key: v._document.key.path.segments[v._document.key.path.segments.length - 1], ...v.data() }; });
        return (<D>
            <Heading variant="2">Популярні тури</Heading>

            <S>
                {ourTours.map((v) => (<ContentCard key={v.key} href={"/tours/" + v.key} title={v.title} src={v.image} price={v.price} place={v.city} date={v.date} duration={v.duration} />))}
            </S>
            <ButtonLink href="\tours">Більше</ButtonLink>

        </D>);
    }
}