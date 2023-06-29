import { random } from "lodash";
import { css, styled } from "styled-components";

const Logo = styled.div`
    border-radius:50%;
    ${() => {
        //Рандомно обираємо градієнт на задній план лого користувача
        switch (random(3)) {
            case 0:
                return css` background: rgb(34,193,195);
                            background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);`;
            case 1:
                return css` background: rgb(2,0,36);
                            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); `;
            case 2:
                return css` background: rgb(63,94,251);
                            background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); `;
            case 3:
                return css` background: rgb(238,174,202);
                            background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); `;
        }
    }}
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    font-size:2rem;
    ${props => { return css`width:${props.size}; height:${props.size};` }}
`;

export default function ProfileLogo(props) {
    return <Logo size={props.size}>
        <p>{props.nickname[0]}</p>
    </Logo>
}