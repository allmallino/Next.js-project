import Image from "next/image";
import { styled } from "styled-components";

const ImgContainer = styled.figure`
    position:relative;
    margin-left:0;
    z-index:1;
    width:450px;
    aspect-ratio:1/1;
    border-radius:5px;
    overflow:hidden;
    float:left;
    @media screen and (max-width:768px) {
        width:50vw;
    }

    @media screen and (max-width:500px) {
        margin:0;
        width: 100%;
        border-radius:0;
    }
`;

const Img = styled(Image)`
    min-width:100%;
    min-height:100%;
    object-fit:cover;
`;

export default function BackgroundImage(props) {
    return (
        <ImgContainer>
            <Img alt={props.alt} src={props.src} fill={true} />
        </ImgContainer>
        );
}