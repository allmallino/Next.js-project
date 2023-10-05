import { css, styled } from "styled-components"

interface Props{
    name:string
}
const Input = styled.input`
        width:100%;
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        box-sizing:border-box;
        font-size:1rem;
        padding-left:5px;
    `;

const Div = styled.div<Props>`
        ${props => css`grid-area:${props.name};`}
    `;

export default function TextInput(props) {
    return (
        <Div name={props.name}>
            <label>{props.title}</label>
            <Input onChange={props.onChange} type={props.type} placeholder={props.placeholder} min={props.min} max={props.max} value={props.value} title={props.title} />
        </Div>
    )
}