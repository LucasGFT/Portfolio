import React from 'react'
import TituloCategoria from './TituloCategoria';

export default function Skills() {

    const softSkills = [
        "Metodologias Ágeis",
        "Colaboração",
        "Proatividade",
        "Organização",
        "Trabalho em Equipe",
        "Habilidade de ouvir",
        "Adaptabilidade",
        "Resolução de conflitos",
        "Aprendizagem contínua"
    ]

    const linguagens = [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'NextJs',
        'Tailwind CSS',
        'Styled Components',
        'Docker',
        'MySQL',
        'MongoDB',
        'Jest',
        'Redux',
        'Node.js',
        'Context API',
        'Github',
        'Json Web Token',
        'React Testing Library',
    ];

    return (
        <>
            <TituloCategoria id='Skills' nome='Skills' />
            <h2 className='text-2xl font-bold text-gray-400 pl-5'>Hard Skills</h2>
            <div className='pl-7 grid grid-cols-3 gap-1 my-5 text-gray-100'>
                {linguagens.map((linguagem, index) => (
                    <p className='rounded-xl p-1 mr-3 flex-wrap mb-1' key={index}>{linguagem}</p>
                ))}
            </div>
            <h2 className='text-2xl font-bold text-gray-400 pl-5'>Soft Skills</h2>
            <div className='pl-7 grid grid-cols-3 gap-1 my-5 text-gray-100 mb-16'>
                {softSkills.map((skills, index) => (
                    <p className='rounded-xl p-1 mr-3 flex-wrap mb-1' key={index}>{skills}</p>
                ))}
            </div>
        </>
    )
}
