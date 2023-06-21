import { styled } from "styled-components"


const Select = styled.select`
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        width:100%;
        background-color:white;

    `

export default function SelectInput(props) {
    const Div = styled.div`
        grid-area:${props.name};
    `
    return (
        <Div>
            <label>{props.title}</label>
            <Select onChange={props.onChange} type={props.type} placeholder={props.placeholder} value={props.value}>
                {props.options.map((v, i) => (<option value={i} key={i}>{v}</option>))}
            </Select>
        </Div>
    )
}