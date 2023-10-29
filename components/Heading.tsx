'use client'
import { css, styled } from "styled-components";

interface Props{
    readonly variant?:string;
}


const H = styled.p<Props>`
    margin:0;
    clear: both;
    text-align:center;
    ${(props => {
        switch (props.variant) {
            case '1':
                return css`
                        padding: 50px 0 25px 0;
                        font-size:2.5rem;
                        font-weight:800;`;
            case '2':
                return css`
                        padding: 25px 0;
                        font-size:2rem;
                        font-weight:700;`
            case '3':
                return css`
                        padding: 15px 0;
                        font-size:1.7rem;
                        font-weight:600;`;
        }
    })
    }
`;

export default function Heading(props) {
    return <H variant={props.variant}>{props.children}</H>
}