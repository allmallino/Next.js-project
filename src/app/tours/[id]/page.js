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
import CommentSection from '../../../../components/CommentSection/CommentSection';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Map = dynamic(() => import('/components/Map'), { ssr: false });
const auth = getAuth(firebase_app);

export default function Page({ params }) {
    const [tour, tourLoading, tourError] = useDocument(doc(getFirestore(firebase_app), "tours", params.id), []);
    const [user, userLoading, error] = useAuthState(auth);

    const Button = (p) => {
        if (user)
            return (<BuyButton user={p.user} tour={params.id} />);
        else
            return (<></>)
    }

    if (!tourLoading && tour && !userLoading) {
        let ourTour = tour.data();
        return (
            <>
                <BackgroundImage src={ourTour.image} alt={ourTour.title} />
                <ContentTitle location={ourTour.city + ", " + ourTour.country}>{ourTour.title}</ContentTitle>
                <ContentText>{ourTour.text}</ContentText>
                <PageItem title="Ціна: ">{ourTour.price}+ грн</PageItem>
                <PageItem title="Тривалість: ">{ourTour.duration} днів</PageItem>
                <PageItem title="Дата: ">{ourTour.date}.2023</PageItem>
                <Map coordinates={ourTour.route} width="100%" height="400px" />
                <Button user={user} tour={tour} />
                <CommentSection user={user} />
            </>
        )

    }
}
