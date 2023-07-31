import Image from "next/image";
import { styled } from "styled-components";

const ImgContainer = styled.div`
    position:relative;
    z-index:1;
    width:100%;
    height:400px;
    background-color:black;
`;

const Img = styled(Image)`
    min-width:100%;
    min-height:100%;
    object-fit:cover;
`;

export default function BackgroundImage(props) {
    return (
        <ImgContainer>
            <Img alt={props.alt} src={props.src} fill={true} placeholder="blur" />
        </ImgContainer>);
}