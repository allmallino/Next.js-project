'use client';
import { css, styled } from "styled-components";
import ScrollerItem from "./ScrollerItem";
import React from "react";

export default function ImageScroller(props) {

    const [selectedIndex, changeIndex] = React.useState(0);

    const Container = styled.div`
        border-radius:5px;
        overflow:hidden;
        height:35dvw;
        position:relative;
    `;

    const Button = styled.img`
        position:absolute;
        z-index:2;
        background-color:lightgray;
        border-radius:50%;
        width:30px;
        height:30px;
        top:50%;
        padding:5px;
        cursor: pointer;
        ${(props => {
            switch (props.variant) {
                case 'left':
                    return css`left:15px;
                                transform:rotate(180deg);`;
                case 'right':
                    return css`right:15px;`;
            }
        })
        }

        &:hover{
        background-color:gray;

        }
    `;

    const ListOfPages = styled.div`
        border-radius:5px;
        background-color:rgba(211, 211, 211, 0.35);
        position:absolute;
        z-index:2;
        bottom:15px;
        left:50%;
        transform: translate(-50%, -50%);
        display:flex;
        align-items:center;
        justify-content:center;
    `;

    const Page = styled.div`
        border-radius:50%;
        height:10px;
        width:10px;
        margin:5px;
        cursor: pointer;
        background-color:${(props) => props.active === 'true' ? 'white' : 'black'};
    `

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
            <Button variant='left' src="/icon-arrow.png" alt="left" onClick={leftChildSelect} />
            <Button variant='right' src="/icon-arrow.png" alt="right" onClick={rightChildSelect} />
            <ListOfPages>
                {props.childList.map((v) => (<Page active={(v.key === selectedIndex).toString()} key={v.key} onClick={() => { changeIndex(v.key) }} />))}
            </ListOfPages>
            <ScrollerItem key={props.childList[selectedIndex].key}
                href={props.childList[selectedIndex].href}
                src={props.childList[selectedIndex].src}
                title={props.childList[selectedIndex].title}
                text={props.childList[selectedIndex].text} />
        </Container>
    );
}