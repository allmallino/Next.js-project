"use client"
import { useDocument } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { getFirestore, doc } from "firebase/firestore"
import BackgroundImage from '../../../../components/ContentPage/BackgroundImage';
import ContentTitle from '../../../../components/ContentPage/ContentTitle';
import ContentText from '../../../../components/ContentPage/ContentText';
import dynamic from 'next/dynamic';
import BuyButton from '../../../../components/ContentPage/BuyButton';
import CommentSection from '../../../../components/CommentSection/CommentSection';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import CommentInput from '../../../../components/CommentSection/CommentInput';
import Heading from '../../../../components/Heading';
import NotFoundMessage from '../../../../components/NotFoundMessage';
import PageValue from '../../../../components/ContentPage/PageValue';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import styled from 'styled-components';

const Map = dynamic(() => import('../../../../components/Map'), { ssr: false });
const auth = getAuth(firebase_app);

const Button = (p) => {
    if (p.user)
        return (<BuyButton user={p.user} tour={p.id} />);
    else
        return <></>
}

const ValueContainer =styled.div`
    display:flex;
    gap:10px;
`

export default function Page({ params }) {
    const [tour, tourLoading, tourError] = useDocument(doc(getFirestore(firebase_app), "tours", params.id));
    const [user, userLoading, error] = useAuthState(auth);

    if (!tourLoading && tour.data() && !userLoading) {
        let ourTour = tour.data();
        window.scrollTo(0, 0);
        return <>
            <BackgroundImage src={ourTour.image} alt={ourTour.title} />
            <ContentTitle location={ourTour.city + ", " + ourTour.country}>{ourTour.title}</ContentTitle>
            <ValueContainer>
                <PageValue icon={<AttachMoneyRoundedIcon fontSize='large'/>} value={ourTour.price}/>
                <PageValue icon={<AccessTimeFilledRoundedIcon fontSize='large'/>} value={ourTour.duration}/>
                <PageValue icon={<CalendarMonthRoundedIcon fontSize='large'/>} value={ourTour.date}/>
            </ValueContainer>
            <ContentText>{ourTour.text}</ContentText>
            <Map coordinates={ourTour.route} width="100%" height="400px" />
            <Button user={user} id={params.id} />
            <Heading variant="2">Коментарі</Heading>
            <CommentInput user={user} tour={params.id} />
            <CommentSection tour={params.id} />
        </>
    }else if(!tourLoading){
        return <NotFoundMessage text='До таблиці наявних турів' link='/tours'/>
    }
}
