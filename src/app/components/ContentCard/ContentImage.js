import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

const Img = styled(Image)`
        transition:0.5s;
    `

const Container = styled.div`
        position:relative;
        min-width:100%;
        height:50%;
        overflow:hidden;
    `

export default function ContentImage(props) {
    return (
        <Container>
            <Img alt={props.alt} src={props.src} fill={true} />
        </Container>
    );
}