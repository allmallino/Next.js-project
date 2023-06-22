"use client"
import { useDocument } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { getFirestore, doc } from "firebase/firestore"
import BackgroundImage from '/components/ContentPage/BackgroundImage';
import ContentTitle from '/components/ContentPage/ContentTitle';
import ContentText from '/components/ContentPage/ContentText';
import dynamic from 'next/dynamic';
import BuyButton from '/components/ContentPage/BuyButton';
import PageItem from '/components/ContentPage/PageItem';

const Map = dynamic(() => import('/components/Map'), { ssr: false });

export default function Page({ params }) {
    const [tour, tourLoading, tourError] = useDocument(doc(getFirestore(firebase_app), "tours", params.id), []);

    if (!tourLoading && tour) {
        let ourTour = tour.data();
        console.log(ourTour);
        return (
            <>
                <BackgroundImage src={ourTour.image} alt={ourTour.title} />
                <ContentTitle location={ourTour.city + ", " + ourTour.country}>{ourTour.title}</ContentTitle>
                <ContentText>{ourTour.text}</ContentText>
                <PageItem title="Ціна: ">{ourTour.price}+ грн</PageItem>
                <PageItem title="Тривалість: ">{ourTour.duration} днів</PageItem>
                <PageItem title="Дата: ">{ourTour.date}.2023</PageItem>
                <Map coordinates={ourTour.route} width="100%" height="400px" />
                <BuyButton>Забронювати</BuyButton>
            </>
        )

    }
}
