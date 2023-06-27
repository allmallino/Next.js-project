import { styled } from "styled-components";
import { useSignOut } from 'react-firebase-hooks/auth';
import Link from "next/link";

const P = styled.p`
    padding: 15px 25px;
    background-color:white;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: gray;
        transition: all 0.5s;
    }`;

const L = styled(Link)`
    padding: 15px 25px;
    text-decoration: none;
    background-color:white;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: gray;
        transition: all 0.5s;
    }
`

const SubMenu = styled.div`
    display:flex;
    flex-direction:column;
    right:15px;
    top:60px;
    text-align:center;  
    background-color:white;
    position:fixed;
`;

export default function UserInteractionWindow(props) {
    const [signOut, loading, error] = useSignOut(props.auth);

    if (error) {
        console.log(error.message);
    }

    return (
        <SubMenu>
            <L href="/profile">Профіль</L>
            <P onClick={async () => {
                const success = await signOut();
                if (success) {
                    props.selectUser("");
                }
            }}>Вийти</P>
        </SubMenu>
    )
}