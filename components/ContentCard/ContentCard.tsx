import { styled } from "styled-components";
import ContentImage from "./ContentImage";
import ButtonLink from "../ButtonLink";
import Icon from "./Icon";
import Link from "next/link";

//Вертикальна карточка
const Card = styled.section`
        position:relative;
        width:20vw;
        height:600px;
        border-radius:5px;
        overflow:hidden;
        background-color:white;
        box-shadow: 2px 2px 10px black;

        & a:last-child{
            position:absolute;
            left:50%;
            transform: translate(-50%, -50%);
            bottom:15px;
        }

        &:hover img{
            transform:scale(1.2);
            transition:0.5s;
        }

        @media screen and (max-width:1200px) {
            width:30vw;
        }

        @media screen and (max-width:768px) {
            width:45vw;
            height:510px;
        }

        @media screen and (max-width:500px) {
            width:75vw;
            height:510px;
        }
    `;

//Текст карточки
const P = styled.p`
        font-size:1rem;
        margin:0;
    `;

//Розділювальна лінія між назвою і характеристиками карточки
const Divider = styled.hr`
        color: gray;
        margin: -10px auto;
        width: 80%;
    `;

//Контейнер, що розподіляє характеристики карточки
const Grid = styled.div`
        display:grid;
        margin: 25px 10%;
        grid-template-columns: 1fr 1fr;
        row-gap:35px;
        align-items:center;
        justify-items:center;
        grid-template-rows:20px 35px;
    `;

//Контейнер характеристики, в якому буде знаходитися іконка і значення
const C = styled.div`
        display:grid;
        align-items: center;
        gap:10px;
        grid-template-columns:auto 2fr;
    `;

const Head = styled.p`
        display:flex;
        justify-content:center;
        align-items:center;
        text-overflow: ellipsis;
        overflow:hidden;
        margin:0 15px;
        height:70px;
        clear: both;
        text-align:center;
        padding: 15px 0;
        font-size:1.7rem;
        font-weight:600;
    `;

export default function ContentCard(props) {

    return (
        <Card>
            <Link href={props.href}>
                <ContentImage alt={props.title} src={props.src} variant="vertical" />
            </Link>
            <Head>{props.title}</Head>
            <Divider />
            <Grid>
                <C>
                    <Icon color='black' size={20} src='./icon-money.png' />
                    <P>{props.price} грн</P>
                </C>
                <C>
                    <Icon color='black' size={20} src='./icon-calendar.png' />
                    <P>{props.date}</P>
                </C>
                <C>
                    <Icon color='black' size={20} src='./icon-time.png' />
                    <P>{props.duration + (props.duration === 1 ? " день" : props.duration === 2 ? " дні" : " днів")}</P>
                </C>
                <C>
                    <Icon color='black' size={20} src='./icon-map.png' />
                    <P>{props.place}</P>
                </C>
            </Grid>
            <ButtonLink href={props.href}>Докладніше</ButtonLink>
        </Card>
    );
}