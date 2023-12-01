import { css, styled } from "styled-components";
import ContentImage from "./ContentImage";
import Link from "next/link";
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import { Caveat } from "next/font/google";
import Paper from '@mui/material/Paper';


const caveat = Caveat({
    subsets:['cyrillic'],
    weight:['400','600']
})


//Вертикальна карточка
const Card = styled(Paper)`
        height:fit-content;
        width:100%;
        box-sizing:border-box;
        position:relative;
        padding:5.7%;
        background-color:white;
        transition:0.5s;
    `;

//Текст карточки
const P = styled.p`
        text-align:center;
        font-size:1rem;
        margin:0;
    `;

//Контейнер, що розподіляє характеристики карточки
const CardInfo = styled(Card)`
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        box-sizing: border-box;
        display:flex;
        flex-direction:column;
        row-gap:50px;
        justify-content: flex-start;
        align-items:center;
        overflow:hidden;
        padding:25px 5px;

        &.left{
            padding-right: 65%;
            left:0;
        }
        &.right{
            padding-left: 65%;
            right:0;
        }


        @media screen and (max-width:1200px) {
            row-gap:25px;
        }

        @media screen and (max-width:500px) {

            @media not all and (hover: hover){
                &.right{
                    transform: translate(30%, 5%) rotate(3deg);
                }

                &.left{
                    transform: translate(-30%, 5%) rotate(-3deg);
                }
            }

        }

    `;

//Контейнер характеристики, в якому буде знаходитися іконка і значення
const C = styled.div`
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        gap:10px;
        color:#333333;
    `;

const Head = styled.p`
        display:flex;
        justify-content:center;
        align-items:center;
        text-overflow: ellipsis;
        overflow:hidden;
        margin:0 15px;
        height:75px;
        clear: both;
        text-align:center;
        font-size:2rem;
        font-weight:600;

        @media screen and (max-width:1200px) {
            font-size:1.5rem;
        }
        @media screen and (max-width:768px) {
            font-size:2rem;
        }
    `;

const LinkContainer = styled(Link)`
    position:relative;
    width: 323px;
    height:min-content;
    color:#333333;
    text-decoration:none;

    &:hover ${CardInfo}.right{
            transform-origin: right bottom;
            transform: translate(35%, 10%) rotate(5deg);
            z-index:99;
    }

    &:hover ${CardInfo}.left{
        transform-origin: left bottom;
        transform: translate(-35%, 10%) rotate(-5deg);
        z-index:99;
    }
    
    &:hover ${Card}{
        transform:scale(1.1);
        transition:0.5s;
        z-index:100;
    }

    @media screen and (max-width:1200px) {
            width:25vw;
    }

    @media screen and (max-width:768px) {
        width:35vw;
        &:hover ${CardInfo}.right{
            transform: translate(30%, 5%) rotate(3deg);
        }

        &:hover ${CardInfo}.left{
            transform: translate(-30%, 5%) rotate(-3deg);
        }
    }

    @media screen and (max-width:500px) {
        width:55vw;
    }
`;

export default function ContentCard(props) {

    return (
        <LinkContainer href={props.href}>
            <CardInfo elevation={3} className="left">
                <C>
                    <AttachMoneyRoundedIcon/>
                    <P>{props.price} грн</P>
                </C>
                <C>
                    <CalendarMonthRoundedIcon/>
                    <P>{props.date}</P>
                </C>
            </CardInfo>
            <CardInfo elevation={3} className="right">
                <C>
                    <AccessTimeFilledRoundedIcon/>
                    <P>{props.duration + (props.duration === 1 ? " день" : props.duration === 2 || props.duration === 3? " дні" : " днів")}</P>
                </C>
                <C>
                    <MapRoundedIcon/>
                    <P>{props.place}</P>
                </C>
            </CardInfo>
        <Card elevation={6}>
            <ContentImage alt={props.title} src={props.src} variant="vertical" />
            <Head className={caveat.className}>{props.title}</Head> 
        </Card>
        
        </LinkContainer>
    );
}