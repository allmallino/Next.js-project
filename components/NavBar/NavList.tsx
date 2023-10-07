'use client'
import { styled } from "styled-components";
import NavButton from "./NavButton";
import NavAuthButton from "./NavAuthButton";
import { useState } from "react";

//Верхня панель
const Container = styled.div`
    border-bottom: 1px solid black;
    position:sticky;
    z-index:999999;
    background-color:#E5E5E5;
    top:0;
    width:100%;
    box-sizing:border-box;
    padding: 5px 5px;
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
    const [currentPage, changePage]= useState(0);

    return (
        <Container>
            <Ul>
                <Li>
                    <NavButton href="/" variant={currentPage===0?"active":""} onClick={()=>{changePage(0);}}>
                        Головна
                    </NavButton>
                    <NavButton href="/tours" variant={currentPage===1?"active":""} onClick={()=>{changePage(1);}}>
                        Тури
                    </NavButton>
                    <NavButton href="/about" variant={currentPage===2?"active":""} onClick={()=>{changePage(2);}}>
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