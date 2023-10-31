import { styled, css } from "styled-components";
import { useSignOut } from 'react-firebase-hooks/auth';
import Link from "next/link";

const P = styled.p`
    padding: 15px 25px;
    margin:5px 0 0 0 ;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: #b2b2b2;
        transition: all 0.5s;
    }
`;

const L = styled(Link)`
    padding: 15px 25px;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        background-color: #b2b2b2;
        transition: all 0.5s;
    }
`;

//Випадаюче вікно
const SubMenu = styled.div`
    display:flex;
    flex-direction:column;
    right:5px;
    top:60px;
    text-align:center;  
    background-color:#E5E5E5;
    position:fixed;
    z-index: 999;
    width:200px;

    @media screen and (max-width:768px) {
        top:50px;
        width:130px;
    }
`;

export default function UserInteractionWindow(props) {
    const [signOut, loading, error] = useSignOut(props.auth);


    if (error) {
        console.log(props.width);
    }


    return (
        <SubMenu>
            <L href="/profile">Профіль</L>
            <P onClick={async () => {
                //Вихід з акаунту користувача
                const success = await signOut();
                if (success) {
                    props.selectUser("");
                }
            }}>Вийти</P>
        </SubMenu>
    )
}