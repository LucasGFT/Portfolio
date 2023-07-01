import React from 'react'

export default function TituloCategoria(props: { nome: string, className?: string, id?: string }) {
    return (
        <h1 id={props.id} className={`text-3xl font-bold text-gray-100 my-7 ${props.className}`}>{props.nome}</h1>
    )
}
