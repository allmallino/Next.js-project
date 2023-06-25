"use client"
import { styled } from "styled-components"
import IconLink from "./IconLink"



export default function FooterPanel() {
    const Footer = styled.footer`
        background-color:burlywood;
        padding:10px 15px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:gray;
    `
    /*
        const FooterItemContainer = styled.div`
            display:flex;
            gap:15px;
        `

        <FooterItemContainer>
            <IconLink href="https://twitter.com/" src="/icon-twitter.png" />
            <IconLink href="https://facebook.com/" src="/icon-facebook.png" />
            <IconLink href="https://instagram.com/" src="/icon-instagram.png" />
        </FooterItemContainer>

    */
    return <Footer>
        ©RoundWorld 2023
    </Footer>
}