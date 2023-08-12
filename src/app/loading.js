'use client'
import { styled } from "styled-components";

const Container = styled.div`
    margin-top:15px;
    margin-bottom:25px;
    border-radius:5px;
    overflow:hidden;
    height:90dvh;
    min-height:500px;
    position:relative;
    background-color: #e5e5e5;

    @media screen and (max-width:768px) {
        height:65dvw;
    }
`;

export default function Loading() {
    return <>
        <Container />
    </>
}