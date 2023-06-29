import { styled } from "styled-components";
import TextInput from "./TextInput";
import SelectInput from "./SelectInpuit";

//Контейнер, що визначає розташування фільтрів
const Grid = styled.div`
    display:grid;
    grid-template-areas:
    "search search search search search"
    "price city duration date sort";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap:25px;
    margin-bottom:50px;

    @media screen and (max-width:768px) {
        gap:15px;
        grid-template-areas:
        "search search search"
        "price duration city"
        "date none sort";
        grid-template-columns: 2fr 1fr 2fr;
        margin:0 25px 25px 25px
    }`;

//Визначаємо дату зараз, щоб користувач не зміг профільтрувати тури за датою в минулому
const date = new Date();


export default function Filters(props) {
    return (
        <Grid>

            {/*Фільтр, що шукає за назвою туру*/}
            <TextInput onChange={props.onChange("name")} title="Пошук" placeholder="Назва тура" type="text" name="search" value={props.selectedFilters.name} />

            {/*Фільтр, що шукає за ціною туру*/}
            <SelectInput onChange={props.onChange("price")} title="Ціна" name="price" options={["", "500+", "1000+", "1500+", "2000+", "2500+", "3000+", "3500+", "4000+", "4500+", "5000+"]} value={props.selectedFilters.price} />

            {/*Фільтр, що шукає за назвою міста, де буде проходити тур*/}
            <TextInput onChange={props.onChange("city")} title="Місто" placeholder="Київ" type="text" name="city" value={props.selectedFilters.city} />

            {/*Фільтр, що шукає за тривалістю туру*/}
            <TextInput onChange={props.onChange("duration")} title="Тривалість" min={0} max={31} type="number" name="duration" value={props.selectedFilters.duration} />

            {/*Фільтр, що шукає за датою туру*/}
            <TextInput onChange={props.onChange("date")} title="Дата" type="date" name="date" min={date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, '0')}
                value={props.selectedFilters.date} />

            {/*Сортування турів*/}
            <SelectInput onChange={props.onChange("sorting")} title="Сортувати" name="sort" options={["", "За назвою", "За популярністю", "За тривалістю", "За ціною"]} value={props.selectedFilters.sorting} />

        </Grid>
    );
}