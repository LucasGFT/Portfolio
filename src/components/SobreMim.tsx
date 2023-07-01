import React from 'react'

export default function SobreMim() {

    function calcularIdade(): number {
        const anoAtual: number = new Date().getFullYear();
        const idade: number = anoAtual - 2003;
        return idade;
    }


    return (
        <div className='font-inter text-gray-400 mb-28 md:w-11/12 md:pl-8' id='Sobre'>
            <p className='mb-5 w-11/12'>Olá! Meu nome é Lucas Gomes e sou natural de Divinópolis-MG. Atualmente, tenho {calcularIdade()} anos e tenho me dedicado bastante ao estudo de tecnologia. Sempre fui apaixonado pela área, e essa paixão me motivou a ingressar na Trybe, uma escola de tecnologia que oferece um curso de Desenvolvimento Web Full Stack.</p>
            <p className='w-11/12 mb-14'>Na Trybe, estudei uma variedade de linguagens de programação, como JavaScript, HTML, CSS e diversas outras. Além disso, estudei sobre bancos de dados e ferramentas importantes para o desenvolvimento de aplicações web completas e eficientes.</p>
        </div>
    )
}
