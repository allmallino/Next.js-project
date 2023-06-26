import { css, styled } from "styled-components";

const Button = styled.div`
        display:flex;
        border-radius:4px;
        width:25px;
        height:25px;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        color:black;
        border:1px solid black;
        ${props => {
        switch (props.active) {
            case 'true':
                return css`background-color:white;`;
            case 'false':
                return css`background-color:bisque;`;
        }
    }}`

export default function PageButton(props) {

    return (
        <Button active={props.active} onClick={props.onClick}>
            {props.num}
        </Button>
    );
}