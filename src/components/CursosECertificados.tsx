import React from 'react'
import Cursos from './Cursos'
import TituloCategoria from './TituloCategoria'
// import Certificado from './Certificado'

export default function CursosECertificados() {
    return (
        <div className='my-10 py-6' id='Formacao'>
            <TituloCategoria nome='Formação' />
            <Cursos titulo='Ensino Médio' empresa='Rede de Ensino Apogeu' dataComecou={2019} dataTerminou={2021} />
            <Cursos titulo='Ensino Técnico' empresa='Trybe' dataComecou={2022} dataTerminou={2023} texto={`
                A Trybe é uma escola de tecnologia que tem comprometimento genuíno com o sucesso 
                profissional das pessoas estudantes. São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento 
                web, desenvolvimento, Front-end, Back-end, ciência da computação, metodologias 
                ágeis e habilidades comportamentais.
            `} />
            {/* <Certificado titulo='NextJs e ReactJs' empresa='Udemy' link='https://www.udemy.com/certificate/UC-0acdb8e0-291f-44f7-9237-4e1d71d6007b/' />
            <Certificado titulo='Front End' link='https://www.credential.net/4b6be73d-56a5-4fee-b00b-b6c5d26f2637' empresa='Trybe' />
            <Certificado titulo='Back End' link='https://scl.io/oh7SqCO' empresa='Trybe' /> */}
        </div>
    )
}
