import Image from "next/image";
import { css, styled } from "styled-components";

interface Props{
    variant:string
}

//Картинка в карточці
const Img = styled(Image)`
        min-width:100%;
        min-height:100%;
        object-fit:cover;
        transition:0.5s;
    `;

//Контейнер, в якому буде лежати картинка, при наведенні на нього, ця картинка буде розширюватися.
//Він може бути як і в вертикальній карточці, так і в горизонтальній
const Container = styled.div<Props>`
        position:relative;
        overflow: hidden;
        ${props => {
        switch (props.variant) {
            case "horizontal":
                return css`
                    min-height: 100%;
                `;
            case "vertical":
                return css`
                    min-width: 100%;
                    height: 50%;
                `;
        }
    }
    }
`;

export default function ContentImage(props) {
    return (
        <Container variant={props.variant}>
            <Img alt={props.alt} src={props.src} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </Container>
    );
}