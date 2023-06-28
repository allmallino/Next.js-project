import { useState } from "react";
import { styled } from "styled-components";
import PageButton from "./PageButton";
import ContentCard from "../ContentCard/ContentCard";

const Section = styled.section`
    display: grid;
    grid-template-columns:auto auto auto;
    justify-content:space-around;
    grid-gap:25px; 
    margin: 10px auto;
    width: 75%;
    padding: 10px 0;
  `;

const PagesContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    margin:0 auto;
`;

const I = styled.i`
    display:block;
    text-align:center;
`;

export default function ToursTableContent(props) {
    const [currentIndex, changeIndex] = useState(0);

    if (props.tours.length > 9) {
        let ourTours = [];

        for (let i = currentIndex * 9; i < (currentIndex + 1) * 9 && i < props.tours.length; i++) {
            ourTours.push(<ContentCard key={props.tours[i].key} href={"/tours/" + props.tours[i].key} title={props.tours[i].title} src={props.tours[i].image} price={props.tours[i].price} place={props.tours[i].city} date={props.tours[i].date} duration={props.tours[i].duration} />);
        }

        let pages = [];

        for (let i = 0; i < Math.ceil(props.tours.length / 9); i++) {
            pages.push(<PageButton onClick={() => { changeIndex(i) }} num={i + 1} active={i === currentIndex ? "true" : "false"} key={i} />)
        }

        return (<>
            <Section>
                {ourTours}
            </Section>
            <PagesContainer>
                {pages}
            </PagesContainer>
        </>);
    } else if (props.tours.length >= 1) {
        return (
            <Section>
                {props.tours.map((v) => (<ContentCard key={v.key} href={"/tours/" + v.key} title={v.title} src={v.image} price={v.price} place={v.city} date={v.date} duration={v.duration} />))}
            </Section>);
    } else {
        return (
            <I>Нажаль ми не маємо турів за заданими фільтрами</I>);
    }
}