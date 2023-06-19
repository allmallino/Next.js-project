import { styled } from "styled-components"


const Select = styled.select`
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
    `

export default function SelectedInput(props) {
    const Div = styled.div`
        grid-area:${props.name};
        width:100%;
    `
    return (
        <Div>
            <label>{props.title}</label>
            <Select type={props.type} placeholder={props.placeholder}>
                {props.options.map((v, i) => (<option value={v} key={i}>{v}</option>))}
            </Select>
        </Div>
    )
}