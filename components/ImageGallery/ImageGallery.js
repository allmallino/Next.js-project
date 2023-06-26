"use client"
import { styled } from "styled-components";
import ScrollerButton from "../ImageScroller/ScrollerButton";
import { useState } from "react";
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import firebase_app from '@/firebase/config';
import { collection, getFirestore } from "firebase/firestore";
import Image from "next/image";

const Gallery = styled.div`
    float:left;
    position:relative;
    display:flex;
    width:300px;
    height:300px;
    border-radius:5px;
    background-color:lightgray;
    margin-right:25px;
    margin-bottom:25px;
    overflow:hidden;
`
const Cont = styled.div`
    width:100%;
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    transition:0.5s ease all;
    z-index:99;
    
    &:hover{
        opacity:1;
        transition:0.5s ease all;
    }
`

const Img = styled(Image)`
        min-width:100%;
        min-height:100%;
        object-fit:cover;
        `;
export default function ImageGallery() {
    const [selectedIndex, changeIndex] = useState(0);
    const [images, imagesLoading, imagessError] = useCollectionOnce(collection(getFirestore(firebase_app), "gallery"), []);

    function leftChildSelect() {
        changeIndex(index => {
            let oIndex = (index - 1) % images.docs.length;
            oIndex = oIndex < 0 ? oIndex + images.docs.length : oIndex;
            return oIndex
        });
    }

    function rightChildSelect() {
        changeIndex(index => {
            return (index + 1) % images.docs.length;
        });
    }

    if (!imagesLoading && images) {
        return <Gallery>
            <Cont>
                <ScrollerButton variant='left' onClick={leftChildSelect} />
                <ScrollerButton variant='right' onClick={rightChildSelect} />
            </Cont>
            <Img src={images.docs[selectedIndex].data().url} fill={true} alt={images.docs[selectedIndex].data().alt} />
        </Gallery>
    } else {
        <Gallery />
    }
}