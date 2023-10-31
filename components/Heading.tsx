'use client'
import { css, styled } from "styled-components";

interface Props{
    readonly variant?:string;
}


const H = styled.p<Props>`
    margin:0;
    clear: both;
    text-align:center;
    color:#333333;
    ${(props => {
        switch (props.variant) {
            case '1':
                return css`
                        padding: 50px 0 25px 0;
                        font-size:2.5rem;
                        font-weight:bold;`;
            case '2':
                return css`
                        padding: 25px 0;
                        font-size:2rem;
                        font-weight:bold;`
            case '3':
                return css`
                        padding: 15px 0;
                        font-size:1.7rem;
                        font-weight:bold;`;
        }
    })
    }
`;

export default function Heading(props) {
    return <H variant={props.variant}>{props.children}</H>
}