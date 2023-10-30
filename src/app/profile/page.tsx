"use client"
import firebase_app from "@/firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Heading from "../../../components/Heading";
import ProfileInformation from "../../../components/Profile/ProfileInformation";
import CartList from "../../../components/Profile/CartList";

const auth = getAuth(firebase_app);
export default function Home() {
    const [user, userLoading, error] = useAuthState(auth);

    if (user) {
        return <>
            <ProfileInformation user={user} auth={auth} />
            <CartList user={user} />
        </>
    }
    else if (!userLoading) {
        return <Heading variant="1">Залогінтеся, щоб подивитися інформацію про акаунт</Heading>
    }

}
