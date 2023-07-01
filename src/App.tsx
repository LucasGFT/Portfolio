import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import InformacoesEsquerda from './components/InformacoesEsquerda';
import SobreMim from './components/SobreMim';
import Projetos from './components/TodosProjeto';
import CursosECertificados from './components/CursosECertificados';
import Skills from './components/Skills';
import Certificado from './components/Certificado';
import TituloCategoria from './components/TituloCategoria';

function App() {
  const [localScroll, setLocalScroll] = useState('');
  const [clicadoNav, setClicadoNav] = useState<false | string>(false);

  useEffect(() => {

  }, [])

  const Teste = useCallback((mudouHash?: boolean, id?: string) => {
    if (mudouHash && id) {
      setClicadoNav(id)
      console.log(clicadoNav)
      return setLocalScroll(id)
    }
    const scrollPosition = window.scrollY;
    const skills = document.getElementById('Skills')?.offsetTop;
    const sobre = document.getElementById('Sobre')?.offsetTop;
    const projetos = document.getElementById('Projetos')?.offsetTop;
    const formacao = document.getElementById('Formacao')?.offsetTop;
    const certificados = document.getElementById('Certificados')?.offsetTop;
    if (skills && sobre && projetos && formacao && certificados) {
      if (scrollPosition > projetos && scrollPosition < skills) {
        setLocalScroll('Projetos')
      } else if (scrollPosition > skills && scrollPosition < certificados - 400) {
        setLocalScroll('Skills')
      } else if (scrollPosition > formacao && scrollPosition < projetos) {
        setLocalScroll('Formacao')
      } else if (scrollPosition < formacao) {
        setLocalScroll('Sobre')
      } else if (scrollPosition > certificados - 550) {
        setLocalScroll('Certificados')
      }
    }
  }, [clicadoNav])


  useEffect(() => {
    window.addEventListener('scroll', () => Teste());

    return () => {
      window.removeEventListener('scroll', () => Teste());
    };
  }, [Teste])

  // }, [])

  return (
    <div className='pt-24 px-8 md:px-32 relative'>
      <InformacoesEsquerda locScroll={localScroll} setLocScroll={Teste} className='h-full w-48 bg-gray-200' />
      <div className='flex justify-end ml-8'>
        <div className='md:w-2/4 md:right-16'>
          <SobreMim />
          <CursosECertificados />
          <Projetos />
          <Skills />
          <TituloCategoria id='Certificados' nome='Certificados' className='mb-2' />
          <Certificado titulo='NextJs e ReactJs' empresa='Udemy' link='https://www.udemy.com/certificate/UC-0acdb8e0-291f-44f7-9237-4e1d71d6007b/' />
          <Certificado titulo='Front End' link='https://www.credential.net/4b6be73d-56a5-4fee-b00b-b6c5d26f2637' empresa='Trybe' />
          <Certificado titulo='Back End' link='https://scl.io/oh7SqCO' empresa='Trybe' />
        </div>
      </div>
    </div>
  );
}

export default App;
