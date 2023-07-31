import Image from "next/image";
import { styled } from "styled-components";

//Контейнер, що буде мати наше зображення оголошення і супутній текст до нього
//Також за бажанням, можна йому буде додати посилання на іншу сторінку (новина, акція і тд...)
const Link = styled.a`
    text-decoration:none;
    height:100%;
    width:100%;
`;

//Контейнер в якому буде знаходитися назва оголошення і текст
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:relative;
    z-index:1;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.45);
    color: white;
    text-decoration:none;
`;

//Зображення оголошення
const Img = styled(Image)`
    min-width:100%;
    min-height:100%;
    object-fit:cover;
`;

//Текст оголошення
const P = styled.p`
    max-width:70%;
    text-align:center;
`;

//Назва оголошення
const T = styled.h1`
    text-align:center;
    max-width:70%;
`

export default function ScrollerItem(props) {

    return (
        <Link href={props.href}>
            <Container>
                <T>{props.title}</T>
                <P>{props.text}</P>
            </Container>
            <Img src={props.src} fill={true} alt={props.title} placeholder="blur" priority={true} />
        </Link>
    );
}