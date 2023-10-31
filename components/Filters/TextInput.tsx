import { css, styled } from "styled-components"
import { TextField } from "@mui/material";

interface Props{
    name:string
}
const Input = styled(TextField)`
        height:35px;
        font-size:1rem;
    `;

const Div = styled.div<Props>`
        ${props => css`grid-area:${props.name};`}
    `;

export default function TextInput(props) {
    if(props.value!="" || props.type==="date"){
        return (
            <Div name={props.name}>
                {props.icon}
                <Input id={props.name} label={props.title} fullWidth type={props.type} variant="outlined" aria-valuenow={props.value} aria-valuemin={props.min} aria-valuemax={props.max} onChange={props.onChange} InputLabelProps={{ shrink: true }} inputProps={props.inputProps} />
            </Div>
        )
    }else{
        return (
            <Div name={props.name}>
                {props.icon}
                <Input id={props.name} label={props.title} fullWidth type={props.type} variant="outlined" aria-valuenow={props.value} aria-valuemin={props.min} aria-valuemax={props.max} onChange={props.onChange} inputProps={props.inputProps}/>
            </Div>
        )
    }
    
}