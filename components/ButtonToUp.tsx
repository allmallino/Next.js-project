"use client"

import { useWindowScroll } from "react-use";
import { css, styled } from "styled-components";

const C = styled.div`
    position:fixed;
    top:calc(100vh - 50px);
    right:1%;
    background-color:#E5E5E5;
    border: 1px solid black;
    border-radius: 4px;
    padding: 1px 1px 0 0;
    width:50px;
    height:50px;
    text-align:center;
    cursor: pointer;
    transform: rotate(270deg);
    z-index: 99999;
    transition: 0.5s all;
    ${(props => {
        if (props.hidden) {
            return css`opacity:0;`;
        } else {
            return css`opacity:1;`;
        }
    })
    }

    &:hover{
    background-color: #b2b2b2;
    transition: 0.5s all;
    }

    &::after{
    content: "";
    position: absolute;
    left: 10px;
    display: block;
    width: 20px;
    height: 20px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    top: 15px;
    transform: rotate(135deg);
}

@media screen and(max-width: 768px) {
    top: calc(100vh - 35px);
    width: 35px;
    height: 35px;

        &::after{
        left: 10px;
        width: 10px;
        height: 10px;
        top: 12px;
    }
}
`;



export default function ButtonToUp() {
    const { x, y } = useWindowScroll();

    return <C onClick={() => { window.scrollTo(0, 0); }} hidden={y >= 1 ? false : true} />

}