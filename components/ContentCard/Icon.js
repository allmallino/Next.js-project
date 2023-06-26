import { styled, css } from "styled-components";

const Div = styled.div`
        display:block;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat; 
        ${(props => {
        return css`
            width:${props.size}px;
            height:${props.size}px;
            background-color:${props.color};
            -webkit-mask-image: url(${props.src});
            mask-image: url(${props.src});
            -webkit-mask-size: ${props.size}px;
            mask-size: ${props.size}px;`
    })}`;

export default function Icon(props) {
    return (
        <Div size={props.size} src={props.src} color={props.color} />
    );
}