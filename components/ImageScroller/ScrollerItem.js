import Image from "next/image";
import { styled } from "styled-components";

const Link = styled.a`
        text-decoration:none;
        height:100%;
        width:100%;
    `;

const Container = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        position:relative;
        z-index:1;
        width:100%;
        height:100%;
        background-color:rgba(0, 0, 0, 0.5);
        color: white;
        text-decoration:none;
        transition:0.3s ease;

        &:hover{
         transition:0.3s ease;
         background-color:rgba(0, 0, 0, 0.75);
        }
        `;


const Title = styled.h1``;

const P = styled.p``;

const Img = styled(Image)`
        min-width:100%;
        min-height:100%;
        object-fit:cover;
        `;

export default function ScrollerItem(props) {

    return (
        <Link href={props.href}>
            <Container>
                <Title>{props.title}</Title>
                <P>{props.text}</P>
            </Container>
            <Img src={props.src} fill={true} alt={props.title} />
        </Link>
    );
}