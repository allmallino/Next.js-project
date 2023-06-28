import { styled } from "styled-components";
import ContentImage from "./ContentImage";
import Heading from "../Heading";
import ButtonLink from "../ButtonLink";
import Icon from "./Icon";

const P = styled.p`
        font-size:1rem;
    `;

const Card = styled.section`
        position:relative;
        width:20vw;
        height:65vh;
        border-radius:5px;
        overflow:hidden;
        background-color:white;
        box-shadow: 2px 2px 10px black;

        & a{
            position:absolute;
            left:50%;
            transform: translate(-50%, -50%);
            bottom:15px;
        }

        &:hover img{
            transform:scale(1.2);
            transition:0.5s;
        }
    `;

const Divider = styled.hr`
        color: gray;
        margin: -10px auto;
        width: 80%;
    `;

const Grid = styled.div`
        display:grid;
        margin: 25px 10%;
        grid-template-columns: 1fr 1fr;
        row-gap:25px;
    `;

const C = styled.div`
        display:flex;
        align-items: center;
        gap:10px;
    `;


export default function ContentCard(props) {

    return (
        <Card>
            <ContentImage alt={props.title} src={props.src} width={props.width} height={props.height} variant="vertical" />
            <Heading variant="3" >{props.title}</Heading>
            <Divider />
            <Grid>
                <C>
                    <Icon color='black' size={20} src='./icon-money.png' />
                    <P>від {props.price} грн</P>
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