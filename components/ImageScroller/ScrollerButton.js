'use client';
import { css, styled } from "styled-components";

const Button = styled.img`
    position:absolute;
    z-index:2;
    background-color:lightgray;
    border-radius:50%;
    width:30px;
    height:30px;
    top:50%;
    padding:5px;
    cursor: pointer;
    ${(props => {
        switch (props.variant) {
            case 'left':
                return css`left:2%; 
                    transform:rotate(180deg);`;
            case 'right':
                return css`right:2%;`;
        }
    })
    }

    &:hover{
    background-color:gray;

}`;

export default function ScrollerButton(props) {
    return (
        <Button variant={props.variant} src="/icon-arrow.png" alt={props.variant} onClick={props.onClick} />
    );
}