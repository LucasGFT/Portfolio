import React from 'react'

interface CursoProps {
    titulo: string,
    empresa: string,
    dataComecou: number
    dataTerminou: number,
    texto?: string
}

export default function Cursos(props: CursoProps) {
    return (
        <div>
            <div className={`flex py-3 px-5 rounded-lg m-3`}>
                <div className='mr-5 text-gray-100'>
                    <p className='h-full flex items-start'>
                        {`${props.dataComecou} - ${props.dataTerminou}`}
                    </p>
                </div>
                {props.texto !== undefined ? (
                    <div className={`w-4/6`}>
                        <p className='font-medium text-xl text-white mb-1'>{props.titulo}</p>
                        <p className='font-medium text-base text-white'>{props.empresa}</p>
                        <p className='text-gray-500'>{props.texto}</p>
                    </div>
                ) : (
                    <div className={`w-4/6`}>
                        <p className='font-medium text-xl text-white '>{props.titulo}</p>
                        <p className='pl-3 font-normal text-lg text-white'>{props.empresa}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
