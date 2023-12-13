'use client'
import { styled } from "styled-components";
import { usePathname } from 'next/navigation';
import NavButton from "./NavButton";
import NavAuthButton from "./NavAuthButton";
import useMediaQuery from '@mui/material/useMediaQuery';

//Верхня панель
const Container = styled.div`
    position:sticky;
    z-index:999999;
    background-color:#E5E5E5;
    top:0;
    width:100%;
    box-sizing:border-box;
    padding: 5px 25px;
    overflow:hidden;

    @media screen and (max-width:768px) {
        padding:0 5px;
    }
`;

//Список, де будуть зберігатися наші кнопки
const Ul = styled.ul`
    height: 50px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0;
    padding:0;
`;

//Стилізація двох основних регіонів, регіон взаємодії з даними користувача і регіон переходу по розділам сайту
const Li = styled.li`
    display:flex;
`;

export default function NavList() {
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <Container>
            <Ul>
                {matches?(
                <Li> 
                    <img src="/roundworld-logo.png" alt="RoundWorld" width={200}/>
                </Li>
                ):(<></>)}
                
                <Li>
                    <NavButton href="/" variant={usePathname()==="/"?"active":""}>
                        Головна
                    </NavButton>
                    <NavButton href="/tours" variant={usePathname().startsWith("/tours")?"active":""}>
                        Тури
                    </NavButton>
                    <NavButton href="/about" variant={usePathname().startsWith("/about")?"active":""}>
                        Про нас
                    </NavButton>
                </Li>
                <Li>
                    <NavAuthButton />
                </Li>
            </Ul>
        </Container>
    );
}