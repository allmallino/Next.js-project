import { styled } from "styled-components";



export default function Icon(props) {
    const Div = styled.div`
        display:block;
        width:${props.size}px;
        height:${props.size}px;
        background-color:${props.color};
        -webkit-mask-image: url(${props.src});
        mask-image: url(${props.src});
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat; 
        -webkit-mask-size: ${props.size}px;
        mask-size: ${props.size}px;
    `

    return (
        <Div />
    );
}