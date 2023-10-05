import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { css, styled } from "styled-components";

//Кнопка, яку я спробував стилізувати як логотип google
const B = styled.button`
    border:2px solid;
    border-radius:5px;
    border-image:linear-gradient(90deg, #3878e5, #2b9d4a, #e9af00, #dc3c2a) 1;
    background-color:#f5f5f5;
    ${props => {
        if (!props.disabled) {
            return css`
            &:hover{
                background-color:#E5E5E5;
            }
            `
        }
    }}
    
`
export default function LoginWithGoogleButton(props) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(props.auth);

    if (loading) {
        return (<B disabled={true}> Увійти через Google</B >);
    }

    return (<B onClick={() => { signInWithGoogle() }}>Увійти через Google</B>);
}