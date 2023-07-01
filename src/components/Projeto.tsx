import React, { useState } from 'react'
import { iconFlecha } from '../icon/IconesMenu';

interface ProjetoProps {
    titulo: string;
    texto: string;
    linguagens?: string[];
    img?: string;
    linkGit?: string;
    linkWeb?: string
}

export default function Projeto(props: ProjetoProps) {

    const [mouseEmcima, setMouseEmCima] = useState(false)

    function renderizar() {
        return (
            <div onMouseLeave={() => setMouseEmCima(false)} onMouseEnter={() => setMouseEmCima(true)} className={`flex py-6 px-5 ${props.linkGit ? 'hover:cursor-pointer hover:bg-custom-blue-hover' : ''} rounded-lg m-3 flex-col md:flex-row`}>
                {props.img && (
                    <div className='flex flex-col h-auto w-28 justify-between'>
                        <img src={props.img} alt={props.titulo} className='h-14 w-5/6 mt-3' />
                        {props.linkWeb && (<button className='bg-custom-blue-hover text-white p-1 mt-2'>Web</button>)}
                    </div>
                )}
                <div className='w-5/6'>
                    <p className={`font-medium text-lg flex items-center ${mouseEmcima ? 'text-hover-text' : 'text-white'}`}>{`${props.titulo} `}{iconFlecha}</p>
                    <p className='text-gray-500'>{props.texto}</p>
                    <ul className='flex mt-2 flex-wrap'>
                        {props.linguagens?.map((element, i) => <li className={`bg-teal-400/10 ${mouseEmcima ? 'text-hover-text' : ''} rounded-xl p-1 mr-3 flex-wrap mb-1`} key={i + Math.random()}><p className='px-2'>{element}</p></li>)}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        props.linkGit ? <a href={props.linkGit} target='_blank' rel='noreferrer'>{renderizar()}</a> : renderizar()
    )
}
