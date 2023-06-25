'use client'
import { css, styled } from "styled-components";

export default function Heading(props) {
    const H = styled.p`
        margin:0;
        ${(props => {
            switch (props.variant) {
                case '1':
                    return css`
                            padding: 25px 0 50px 0;
                            font-size:2.5rem;
                            font-weight:800;
                            text-align:center;`;
                case '2':
                    return css`
                            padding: 25px 0;
                            font-size:2rem;
                            font-weight:700;
                            text-align:center;`
                case '3':
                    return css`
                            padding: 15px 0;
                            font-size:1.7rem;
                            font-weight:600;
                            text-align:center;`;
                case '4':
                    return css`
                            font-size:1.5rem;
                            font-weight:500;
                            text-align:center;`
                case '5':
                    return css`
                            font-size:1.3rem;
                            font-weight:400;
                            text-align:center;`;
                case '6':
                    return css`
                            font-size:1.2rem;
                            font-weight:400;
                            text-align:center;`;
            }
        })
        }
    `;

    return <H variant={props.variant}>{props.children}</H>

}