import React, { useState } from 'react'
import Navegacao from './nav'
import Icones from './Icones'

export default function InformacoesEsquerda(props: { className: string; locScroll: string, setLocScroll: (hash?: boolean, id?: string) => void }) {

    return (
        <div className='mx-auto flex flex-col justify-center md:fixed'>
            <div className='mb-16 flex flex-col items-center md:items-start'>
                <h3 className='text-gray-200 text-5xl font-bold'>Lucas Gomes</h3>
                <h5 className='text-2xl text-gray-200 font-medium my-3'>Desenvolvedor Front End</h5>
                <Icones className='flex md:hidden' />

            </div>
            <div className='hidden md:flex flex-col mb-28 ml-14 md:ml-0'>
                <Navegacao setLocScroll={props.setLocScroll} locScroll={props.locScroll} id='Sobre' nome='Sobre' />
                <Navegacao setLocScroll={props.setLocScroll} locScroll={props.locScroll} nome='Formação' id='Formacao' />
                <Navegacao setLocScroll={props.setLocScroll} locScroll={props.locScroll} id='Projetos' nome='Projetos' />
                <Navegacao setLocScroll={props.setLocScroll} locScroll={props.locScroll} id='Skills' nome='Skills' />
                <Navegacao setLocScroll={props.setLocScroll} locScroll={props.locScroll} nome='Certificados' id='Certificados' />
            </div>
            <Icones className='hidden md:flex' />
        </div>
    )
}
