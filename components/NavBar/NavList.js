'use client'
import { styled } from "styled-components";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";
import NavAuthButton from "./NavAuthButton";

const Container = styled.div`
        border-bottom: 1px solid black;
        position:sticky;
        z-index:999999;
        background-color:white;
        top:0;
        width:100%;
        padding: 5px 0 ;
        overflow:hidden;
    `;

const Ul = styled.ul`
        height: 50px;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:0;
        padding:0;
    `;

const Li = styled.li`
        display:flex;
    `;

export default function NavList() {
    return (
        <Container>
            <Ul>
                <Li>
                    <NavLogo />
                    <NavButton href="/">
                        Головна
                    </NavButton>
                    <NavButton href="/tours">
                        Тури
                    </NavButton>
                    <NavButton href="/about">
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