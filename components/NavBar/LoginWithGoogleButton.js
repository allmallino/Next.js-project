import { useSignInWithGoogle } from "react-firebase-hooks/auth";


export default function LoginWithGoogleButton(props) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(props.auth);

    if (loading) {
        return (<p>Завантаження</p>);
    }

    return (<button onClick={() => { signInWithGoogle() }}>Увійти через Google</button>);
}