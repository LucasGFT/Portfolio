import React, { useState, useEffect } from 'react'


export default function Navegacao(props: { nome: string, id: string, locScroll: string; setLocScroll: (hash?: boolean, id?: string) => void }) {
    const [mouseEmCima, setMouseEmCima] = useState(false)
    const [hash, setHash] = useState('')

    useEffect(() => {
        setHash(props.locScroll)
    }, [props.locScroll])

    function teste() {
        setHash('')
        window.location.hash = props.id
        props.setLocScroll(true, props.id)
    }

    const renderizar = () => {
        return (
            <div className={`text-slate-400 flex items-center w-1/2 hover:cursor-pointer py-2 hover:text-white ${hash === props.id ? 'text-white' : ''} `} onMouseLeave={() => setMouseEmCima(false)} onMouseEnter={() => setMouseEmCima(true)}>
                {hash === props.id ? (
                    <hr className='w-14' />
                ) : (
                    <hr className={`${mouseEmCima ? 'w-14' : 'w-7'} `} />
                )}
                <div className='ml-3'>{props.nome}</div>
            </div>
        )
    }


    return (
        <div onClick={teste}>
            {renderizar()}
        </div>
    )
}
