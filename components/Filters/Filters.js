import { styled } from "styled-components";
import TextInput from "./TextInput";
import SelectInput from "./SelectInpuit";
const Grid = styled.div`
    display:grid;
    grid-template-areas:
    "search search"
    "price city"
    "duration date";
    grid-template-columns: 1fr 1fr;
    gap:25px;
    margin-bottom:25px;
    `;
const date = new Date();

export default function Filters(props) {

    return (
        <Grid>
            <TextInput onChange={props.onChange("name")} title="Пошук" placeholder="Назва тура" type="text" name="search" value={props.selectedFilters.name} />

            <SelectInput onChange={props.onChange("price")} title="Ціна" placeholder="1000" type="number" name="price" options={["", "500+", "1000+", "1500+", "2000+", "2500+", "3000+", "3500+", "4000+", "4500+", "5000+"]} value={props.selectedFilters.price} />

            <TextInput onChange={props.onChange("city")} title="Місто" placeholder="Київ" type="text" name="city" value={props.selectedFilters.city} />

            <TextInput onChange={props.onChange("duration")} title="Тривалість" min={0} type="number" name="duration" value={props.selectedFilters.duration} />

            <TextInput onChange={props.onChange("date")} title="Дата" placeholder="13.07" type="date" name="date" min={date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, '0')}
                value={props.selectedFilters.date} />

        </Grid>
    );
}