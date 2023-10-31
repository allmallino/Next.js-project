import { MenuItem, TextField } from "@mui/material";
import { css, styled } from "styled-components"

interface Props{
    name:string
}

const Select = styled(TextField)`
        height:35px;
        font-size:1rem;
    `;

const Div = styled.div<Props>`
        ${props => css`grid-area:${props.name};`}
    `;

export default function SelectInput(props) {

    return (
        <Div name={props.name}>
            <Select onChange={props.onChange} aria-valuenow={props.value} label={props.title}  id={props.name} select fullWidth defaultValue = "">
                {props.options.map((v, i) => (<MenuItem value={i+''} key={i}>{v}</MenuItem>))}
            </Select>
        </Div>
    )
}