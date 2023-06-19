import { styled } from "styled-components";
import TextInput from "./TextInput";
import Heading from "../Heading";
const Grid = styled.div`
        display:grid;
        grid-template-areas:
        "search search"
        "price city"
        "duration date";
        grid-template-columns: 1fr 1fr;
        gap:25px;
        margin-bottom:25px;
    `
const date = new Date();

const FilterSection = styled.section`
    background-color:burlywood;
    padding-bottom:5px;
  `


export default function Filters() {


    return (
        <FilterSection>
            <Heading variant="2">Фільтри</Heading>
            <Grid>
                <TextInput title="Пошук" placeholder="Назва тура" type="text" name="search" />
                <TextInput title="Ціна" placeholder="1000" type="number" name="price" />
                <TextInput title="Місто" placeholder="Київ" type="text" name="city" />
                <TextInput title="Тривалість" placeholder="1" type="number" name="duration" />
                <TextInput title="Дата" placeholder="13.07" type="date" name="date" min={date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, '0')} />
            </Grid>
        </FilterSection>
    );
}