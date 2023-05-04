import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import carShop from '../assets/CarShop1.png'
import FutScore from '../assets/FutScore1.png'
import PixelArt from '../assets/PixelArt1.png'
import StoreManager from '../assets/StoreManager1.png'
import TFC from '../assets/TFC1.png'
import TrybeTunes from '../assets/TrybeTunes1.png'
import '../style/styleNav.css'
import '../style/styleProjetoIndividual.css'
import { useParams } from "react-router-dom";
import Info from "../components/info";

function ProjetoIndividual(props) {
    const [title, setTitle] = useState('')
    const [paragrafo, setParagrafo] = useState('')
    const [image, setImage] = useState('')
    const [skills, setSkills] = useState([])
    const [linkGithub, setLinkGithub] = useState('')
    const [linkAplication, setLinkAplication] = useState('')
    const params = useParams().name

    const renderPage = () => {
        switch (params) {
            case 'fut_score':
                setTitle('Fut Score')
                setParagrafo('Neste projeto, é possível simular um campeonato de futebol, criar times e partidas, alterar o placar, finalizar partidas e, por fim, visualizar a tabela de classificação. Para acessar o site, é necessário fazer login ou registrar um perfil.')
                setImage(FutScore);
                setSkills(['React', 'HTML', 'CSS', 'Axios', 'NodeJS', 'Express', 'ApiRest', 'Typescript', 'Jest', 'MongoDB', 'Mongoose'])
                setLinkGithub('https://github.com/LucasGFT/FutScore')
            break;
            case 'trybe_tunes':
                setTitle('Trybe Tunes')
                setParagrafo('Este projeto é  uma simulação de um streaming de música que é possivel fazer uma pesquisa de musicas por artistas, e favoritar suas musicas')
                setImage(TrybeTunes);
                setSkills(['React', 'HTML', 'CSS', 'JavaScript'])
                setLinkGithub('https://github.com/LucasGFT/TrybeTunes')
                setLinkAplication('https://lucasgft.github.io/TrybeTunes/')
            break;
            case 'pixel_art':
                setTitle('Pixel Art')
                setParagrafo('Neste projeto há uma tela onde o usuário pode desenhar e criar imagens de pixel art. A tela é composta por uma grade de pixels, onde cada pixel pode ser colorido individualmente pelo usuário. O usuário pode selecionar a cor desejada, aumentar a grade de pixels, e clicar em um pixel para pintá-lo.')
                setImage(PixelArt);
                setSkills(['HTML', 'CSS', 'JavaScript'])
                setLinkGithub('https://github.com/LucasGFT/pixelArt')
                setLinkAplication('https://github.com/LucasGFT/pixelArt')
            break;
            case 'tfc':
                setTitle('TFC(Trybe Futebol Clube)')
                setParagrafo('Neste projeto, é possível simular um campeonato de futebol, criar times e partidas, alterar o placar, finalizar partidas e, por fim, visualizar a tabela de classificação.')
                setImage(TFC);
                setSkills(['NodeJS', 'Express', 'ApiRest', 'Typescript', 'Jest', 'MySQL', 'Sequelize'])
                setLinkGithub('https://github.com/LucasGFT/TFC')
            break;
            case 'car_shop':
                setTitle('Car Shop')
                setParagrafo('Esse projeto é uma Api Rest que efetua o gerenciamento de carros e motos de uma concessionária.')
                setImage(carShop);
                setSkills(['NodeJS', 'Express', 'ApiRest', 'Typescript', 'Jest', 'MongoDB', 'Mongoose'])
                setLinkGithub('https://github.com/LucasGFT/CarShop')
            break;
            case 'store_manager':
                setTitle('Store Manager')
                setParagrafo('Este projeto é feito para gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas.')
                setImage(StoreManager);
                setSkills(['NodeJS', 'Express', 'ApiRest', 'JavaScript', 'Jest', 'MySQL'])
                setLinkGithub('https://github.com/LucasGFT/store_manager')
            break;
            default:
                break;
        }
    }

    useEffect(() => {
        renderPage()
    }, [])

  return (
    <>
      <Nav />
      <div id="container">
        <Info />
        <div className="paginaProjetoIndividual">
            <div id="projeto">
                <img id="imageProject" src={image} alt="askna" />
            </div>
            <div id="infoProjeto">
                <div id="buttonLink">
                    <a href={linkGithub}>
                    GitHub
                    {/* <button>Github</button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                    {linkAplication === '' ? (
                        <button disabled>Aplicacao Online</button>
                    ) : (
                        <a href={linkAplication}>
                            <button>Aplicacao Online</button>
                            </a>
                    )}
                </div>
                <h3>{title}</h3>
                <p>{paragrafo}</p>
                <h4>Tecnologias utilizadas</h4>
                <div id="skillsProjetoIndividual">
                {skills.map((element, index) => (
                    <span key={index} className={`allSkills skill-${element}`}>{element}</span>
                ))}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default ProjetoIndividual;
