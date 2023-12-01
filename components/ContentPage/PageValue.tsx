import { styled } from "styled-components";
const C = styled.div`
    display:flex;
    width:50px;
    height:min-content;
    padding:5px 5px;
    border-radius:5px;
    align-items:center;
    flex-direction:column;
    gap:5px;
`;
const Text = styled.p`
    margin:0;
`

export default function PageValue(props){
    return (
        <C>
            {props.icon}
            <Text>{props.value}</Text>
        </C>
    )
}