"use client"
import { styled } from "styled-components";

const Img = styled.img`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export default function LoadingGif() {
    return <Img src='/loading.gif' alt="Завантаження" />
}