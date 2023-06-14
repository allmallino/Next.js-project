'use client';
import { styled } from "styled-components";
import ScrollerItem from "./ScrollerItem";

export default function ScrollerButton(props) {
    const Container = styled.div`
        border-radius:5px;
        overflow:hidden;
        height:35dvw;
    `;
    return (
        <Container>
            {props.childList.map((c) => (<ScrollerItem key={c.key} href={c.href} src={c.src} title={c.title} text={c.text} />))}
        </Container>
    );
}