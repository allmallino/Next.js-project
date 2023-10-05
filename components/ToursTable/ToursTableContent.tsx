import { useState } from "react";
import { styled } from "styled-components";
import dynamic from "next/dynamic";

const PageButton = dynamic(() => import("./PageButton"));
const ContentCard = dynamic(() => import("../ContentCard/ContentCard"));

//Таблиця в якій будуть знаходитися всі наші карточки з турами
const Section = styled.section`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    place-items: center;
    gap:25px; 
    margin: 10px auto;
    width: 75%;

    @media screen and (max-width:1200px) {
        width: 100%;
    }

    @media screen and (max-width:768px) {
        width: 100%;
        gap:10px;
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width:500px) {
            width: 100%;
            gap:10px;
            grid-template-columns:1fr;
    }
`;

//Контейнер в якому будуть знаходитися кнопки перемикання сторінок
const PagesContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    margin:15px auto 0 auto;
`;

//Стилізація повідомлення про помилку
const I = styled.i`
    display:block;
    text-align:center;
`;

export default function ToursTableContent(props) {
    const [currentIndex, changeIndex] = useState(0);

    //Якщо ми маємо більше ніж 9 турів, то ми розділяємо їх по сторінкам
    if (props.tours.length > 9) {
        let ourTours = [];

        for (let i = currentIndex * 9; i < (currentIndex + 1) * 9 && i < props.tours.length; i++) {
            ourTours.push(<ContentCard key={props.tours[i].key} href={"/tours/" + props.tours[i].key} title={props.tours[i].title} src={props.tours[i].image} price={props.tours[i].price} place={props.tours[i].city} date={props.tours[i].date} duration={props.tours[i].duration} />);
        }

        let pages = [];

        for (let i = 0; i < Math.ceil(props.tours.length / 9); i++) {
            pages.push(<PageButton onClick={() => { changeIndex(i) }} num={i + 1} active={i === currentIndex ? "true" : "false"} key={i} />)
        }

        return <>
            <Section>
                {ourTours}
            </Section>
            <PagesContainer>
                {pages}
            </PagesContainer>
        </>;
    } else if (props.tours.length >= 1) {
        return <Section>
            {props.tours.map((v) => (<ContentCard key={v.key} href={"/tours/" + v.key} title={v.title} src={v.image} price={v.price} place={v.city} date={v.date} duration={v.duration} />))}
        </Section>;
    } else {
        return <I>На жаль, ми не маємо турів за заданими фільтрами</I>;
    }
}