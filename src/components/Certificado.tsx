import React from 'react'

interface CertificadoProps {
    titulo: string;
    empresa: string;
    link?: string;
}

export default function Certificado(props: CertificadoProps) {
    function renderizar() {
        return (
            <div className={`my-3 flex text-center px-8 py-3 ${props.link ? 'hover:cursor-pointer hover:bg-custom-blue-hover' : ''}`}>
                <img src="https://img.icons8.com/ios/452/diploma.png" alt="Ícone de Diploma" width="50" />
                <p className='ml-3 flex items-center font-medium text-base text-gray-200'>{`Certificado de ${props.titulo}, emitido pela ${props.empresa}`}</p>
            </div>
        )
    }
    return (
        <div className='flex justify-start'>
            {props.link ? <a href={props.link} target="_blank" rel="noreferrer" className='text-gray-200'>{renderizar()}</a> : renderizar()}
        </div>
    )
}
