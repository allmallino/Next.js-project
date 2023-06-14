'use client'
import { styled } from "styled-components";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

export default function NavList() {
    const Container = styled.div`
    border-bottom: 1px solid black;
    margin-bottom:10px;
    `
    return (
        <Container>
            <NavLogo />
            <ul>
                <li>
                    <NavButton href="/">
                        Головна
                    </NavButton>
                    <NavButton href="/tours">
                        Тури
                    </NavButton>
                    <NavButton href="/about">
                        Про нас
                    </NavButton>
                </li>
                <li>
                    <NavButton href="/register">
                        Реєстрація
                    </NavButton>
                    <NavButton href="/login">
                        Логін
                    </NavButton>
                </li>
            </ul>
        </Container>
    );
}