import { css, styled } from "styled-components";

const Logo = styled.div`
    border-radius:50%;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    font-size:2rem;
    ${props => { return css`width:${props.size}; height:${props.size};` }}
`

export default function ProfileLogo(props) {
    return <Logo size={props.size}>
        <p>{props.nickname[0]}</p>
    </Logo>
}