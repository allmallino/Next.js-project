import { css, styled } from "styled-components";

export default function PageButton(props) {
    const Button = styled.div`
        display:flex;
        border-radius:4px;
        width:25px;
        height:25px;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        ${(props => {
            switch (props.active) {
                case 'true':
                    return css`background-color:white;
                               color:black;
                               border:1px solid black;`;
                case 'false':
                    return css`background-color:gray;
                               color:white;`;
            }
        })
        }
    `
    return (
        <Button active={props.active} onClick={props.onClick}>
            {props.num}
        </Button>
    );
}