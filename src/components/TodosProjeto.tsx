import React from 'react'
import Projeto from './Projeto'
import TituloCategoria from './TituloCategoria'
import imagemMontyHall from '../images/Monty-Hall.png'
import imagemPixelArt from '../images/PixelArt.png'
import imageSoundSearch from '../images/SoundSearch.png'
import imagemFutscore from '../images/FutScore.png'
import imagemQuiz from '../images/Quiz.png'


export default function Projetos() {
    return (
        <div id='Projetos'>
            <TituloCategoria nome='Projetos' />
            <Projeto linguagens={["React", "HTML", "CSS", "Axios", "NodeJS", "Express", "ApiRest", "Typescript", "Jest", "MongoDB", "Mongoose"]}
                img={imagemFutscore} titulo='FutScore' texto='Neste projeto, é possível simular um campeonato de futebol, criar times e partidas, alterar o placar, finalizar partidas e, por fim, visualizar a tabela de classificação. Para acessar o site, é necessário fazer login ou registrar um perfil.'
                linkGit='https://github.com/LucasGFT/FutScore'
            />
            <Projeto linguagens={["React", "HTML", "CSS", "Javascript"]}
                img={imageSoundSearch}
                linkGit='https://github.com/LucasGFT/SoundSearch' titulo='Sound Search' texto='Este projeto é uma simulação de um streaming de música que é possivel fazer uma pesquisa de musicas por artistas, e favoritar suas musicas.'
            />
            <Projeto linguagens={["NextJs", "HTML", "CSS", "Typescript", 'React']}
                img={imagemQuiz} linkGit='https://github.com/LucasGFT/Quiz'
                titulo='Quiz' texto='Este projeto é uma simulação de um quiz onde os usuários selecionam as respostas e, ao final, é verificada a quantidade de acertos.'
            />
            <Projeto linguagens={["NextJs", "HTML", "CSS", "Typescript", 'React']}
                img={imagemMontyHall} linkGit='https://github.com/LucasGFT/MontyHall'
                titulo='Monty Hall' texto='Este projeto é uma implementação de uma simulação do paradoxo de Monty Hall, onde o jogador pode escolher entre 3 portas e, sendo que atrás de uma delas há um presente.'
            />
            <Projeto linguagens={["HTML", "CSS", 'Javascript']}
                img={imagemPixelArt} linkGit='https://github.com/LucasGFT/pixelArt'
                titulo='Pixel Art' texto='Neste projeto há uma tela onde o usuário pode desenhar e criar imagens de pixel art. A tela é composta por uma grade de pixels, onde cada pixel pode ser colorido individualmente pelo usuário. O usuário pode selecionar a cor desejada, aumentar a grade de pixels, e clicar em um pixel para pintá-lo.'
            />
        </div>
    )
}
