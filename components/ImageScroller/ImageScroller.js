'use client';
import { styled } from "styled-components";
import ScrollerItem from "./ScrollerItem";
import { useState } from "react";
import ScrollerButton from "./ScrollerButton";

//Контейнер для точок, які будуть відображати відповідну сторінку в нашому скроллері
const ListOfPages = styled.div`
    border-radius:5px;
    background-color:rgba(229, 229, 229, 0.35);
    position:absolute;
    z-index:2;
    bottom:2%;
    left:50%;
    transform: translate(-50%, -50%);
    display:flex;
    align-items:center;
    justify-content:center;
`;

//Контейнер в якому буде знаходитися сам скроллер
const Container = styled.div`
    margin-top:15px;
    margin-bottom:25px;
    border-radius:5px;
    overflow:hidden;
    height:90dvh;
    min-height:500px;
    position:relative;

    @media screen and (max-width:768px) {
        height:65dvw;
    }
`;

//Точка, яка відображає сторінку в скроллері
const Page = styled.div`
    border-radius:50%;
    height:10px;
    width:10px;
    margin:5px;
    cursor: pointer;
    background-color:${(props) => props.active === 'true' ? 'white' : 'black'};

    @media screen and (max-width:768px) {
        height:5px;
        width:5px;
    }
`;

export default function ImageScroller(props) {
    const [selectedIndex, changeIndex] = useState(0);

    //Перемикаємо на ліве зображення
    function leftChildSelect() {
        changeIndex(index => {
            let oIndex = (index - 1) % props.childList.length;
            oIndex = oIndex < 0 ? oIndex + props.childList.length : oIndex;
            return oIndex
        });
    }

    //Перемикаємо на праве зображення
    function rightChildSelect() {
        changeIndex(index => {
            return (index + 1) % props.childList.length;
        });
    }

    return (
        <Container>
            <ScrollerButton variant='left' onClick={leftChildSelect} />
            <ScrollerButton variant='right' onClick={rightChildSelect} />
            <ListOfPages>
                {props.childList.map((v, i) => (<Page active={(i === selectedIndex).toString()} key={v.key} onClick={() => { changeIndex(i) }} />))}
            </ListOfPages>
            <ScrollerItem key={props.childList[selectedIndex].key}
                href={props.childList[selectedIndex].href}
                src={props.childList[selectedIndex].image}
                title={props.childList[selectedIndex].title}
                text={props.childList[selectedIndex].text} />
        </Container>
    );
}