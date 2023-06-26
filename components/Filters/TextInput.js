import { css, styled } from "styled-components"


const Input = styled.input`
        width:100%;
        height:35px;
        border-radius: 4px;
        border: 2px solid black;
        box-sizing:border-box;
    `;

const Div = styled.div`
        ${props => css`grid-area:${props.name};`}
    `;

export default function TextInput(props) {
    return (
        <Div name={props.name}>
            <label>{props.title}</label>
            <Input onChange={props.onChange} type={props.type} placeholder={props.placeholder} min={props.min} value={props.value} />
        </Div>
    )
}