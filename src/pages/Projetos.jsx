import React from "react";
import Nav from "../components/nav";
import carShop from '../assets/CarShop1.png'
import FutScore from '../assets/FutScore1.png'
import PixelArt from '../assets/PixelArt1.png'
import StoreManager from '../assets/StoreManager1.png'
import TFC from '../assets/TFC1.png'
import SoundSearch from '../assets/SoundSearch.png'
import '../style/styleNav.css'
import '../style/styleProjetos.css'
import Info from "../components/info";
import { Link } from "react-router-dom";

function Projetos() {
  return (
    <>
      <Nav />
      <div id="container">
        <Info />
        <div className="pagina">
            <h2>Projetos</h2>
            <div id="projects">
            <Link to="/portfolio/projetos/fut_score">
                <div>
                    <img src={FutScore} alt="Projeto Fut Score" className="imgProjects" />
                    <h3>Fut Score</h3>
                    <p>FutScore é um projeto que simula um campeonato de futebol, onde é possivel a criação de time e partidas, alterar o placar, finalizar partidas</p>
                </div>
            </Link>
            <Link to="/portfolio/projetos/sound_search">
                <div>
                    <img src={SoundSearch} alt="Projeto Sound Search" className="imgProjects" />
                    <h3>Sound Search</h3>
                    <p>SoundSearch é um projeto que simula um streaming de música que é possivel fazer uma pesquisa de musicas por artistas</p>
                </div>
            </Link>
            <Link to="/portfolio/projetos/pixel_art">
                <div>
                    <img src={PixelArt} alt="Projeto Pixel Art" className="imgProjects" />
                    <h3>Pixel Art</h3>
                    <p>PixelArt consiste em uma tela onde o usuário pode desenhar e criar imagens de pixel art. Onde cada pixel pode ser colorido individualmente pelo usuário.</p>
                </div>
            </Link>
            <Link to="/portfolio/projetos/tfc">
                <div>
                    <img src={TFC} alt="Projeto TFC" className="imgProjects" />
                    <h3>TFC</h3>
                    <p>TFC também é um projeto informativo sobre partidas e classificações de futebol</p>
                </div>
            </Link>
            
            <Link to="/portfolio/projetos/car_shop">
                <div>
                    <img src={carShop} alt="Projeto Car Shop" className="imgProjects" />
                    <h3>Car Shop</h3>
                    <p>Car Shop é um projeto feito para gerenciamento de uma concessionária de veículos</p>
                </div>
            </Link>
            <Link to="/portfolio/projetos/store_manager">
            <div>
            <img src={StoreManager} alt="Projeto " className="imgProjects" />
                <h3>Store Manager</h3>
                <p>Store Manager é um projeto de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas.</p>
            </div> 
            </Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default Projetos;
