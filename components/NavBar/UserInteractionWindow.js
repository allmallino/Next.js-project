import { styled } from "styled-components";
import { useSignOut } from 'react-firebase-hooks/auth';

const P = styled.p`
    margin:0 0 10px 0;
    padding: 15px 25px;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: gray;
        transition: all 0.5s;
    }`;
const SubMenu = styled.div`
    background-color:white;
    width:100%;
    text-align:center;
`
export default function UserInteractionWindow(props) {
    const [signOut, loading, error] = useSignOut(props.auth);
    if (error) {
        console.log(error.message);
    }
    return (
        <SubMenu>
            <P>Профіль</P>
            <P onClick={async () => {
                const success = await signOut();
                if (success) {
                    props.selectUser("");
                }
            }}>Вийти</P>
        </SubMenu>
    )
}