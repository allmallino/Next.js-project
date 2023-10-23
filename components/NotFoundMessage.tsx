"use client"
import Heading from './Heading'
import ButtonLink from './ButtonLink'
import { styled } from "styled-components";

const Conteiner = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`


export default function NotFoundMessage({text="На головну", link="/"}:{text:string, link:string}){
    return <Conteiner>
        <Heading variant='1'>Не знайдено</Heading>
        <Heading variant='3'>Вибачте, не було знайдено сторінку за такою адресою</Heading>
        <ButtonLink href={link}>{text}</ButtonLink>
    </Conteiner>
}