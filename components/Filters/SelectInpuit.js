import { css, styled } from "styled-components"


const Select = styled.select`
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        width:100%;
        background-color:white;
        font-size:1rem;
    `;

const Div = styled.div`
        ${props => css`grid-area:${props.name};`}
    `;

export default function SelectInput(props) {

    return (
        <Div name={props.name}>
            <label>{props.title}</label>
            <Select onChange={props.onChange} value={props.value} title={props.title}>
                {props.options.map((v, i) => (<option value={i} key={i}>{v}</option>))}
            </Select>
        </Div>
    )
}