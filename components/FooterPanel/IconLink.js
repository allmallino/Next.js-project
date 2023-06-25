import Link from "next/link"
import { styled } from "styled-components"

const L = styled(Link)`

`
const Icon = styled.img`
    height:25px;
    width:25px;
`

export default function IconLink(props) {
    return <L href={props.href}>
        <Icon src={props.src} />
    </L>
}