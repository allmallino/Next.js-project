'use client';
import { styled } from "styled-components";
import ScrollerItem from "./ScrollerItem";
import { useState } from "react";
import ScrollerButton from "./ScrollerButton";

const ListOfPages = styled.div`
        border-radius:5px;
        background-color:rgba(211, 211, 211, 0.35);
        position:absolute;
        z-index:2;
        bottom:2%;
        left:50%;
        transform: translate(-50%, -50%);
        display:flex;
        align-items:center;
        justify-content:center;
    `;

const Container = styled.div`
        border-radius:5px;
        overflow:hidden;
        height:35dvw;
        position:relative;
    `;



const Page = styled.div`
    border-radius:50%;
    height:10px;
    width:10px;
    margin:5px;
    cursor: pointer;
    background-color:${(props) => props.active === 'true' ? 'white' : 'black'};
    `;

export default function ImageScroller(props) {

    const [selectedIndex, changeIndex] = useState(0);

    function leftChildSelect() {
        changeIndex(index => {
            let oIndex = (index - 1) % props.childList.length;
            oIndex = oIndex < 0 ? oIndex + props.childList.length : oIndex;
            return oIndex
        });
    }

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