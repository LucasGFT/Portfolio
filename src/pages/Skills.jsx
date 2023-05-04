import Nav from "../components/nav";
import '../style/styleNav.css'
import '../style/styleSkills.css'
import HTML from '../assets/skills/html.png'
import contexapi from '../assets/skills/contextapi.png'
import reactTesting from '../assets/skills/reactTesting.png'
import css from '../assets/skills/css-3.png'
import docker from '../assets/skills/docker.png'
import react from '../assets/skills/react.svg'
import github from '../assets/skills/github.svg'
import jwt from '../assets/skills/jwt.svg'
import typescript from '../assets/skills/typescript.svg'
import express from '../assets/skills/express.svg'
import jest from '../assets/skills/jest.svg'
import mysql from '../assets/skills/mysql.svg'
import js from '../assets/skills/js.png'
import mongodb from '../assets/skills/mongodb.png'
import nodejs from '../assets/skills/nodejs.png'
import redux from '../assets/skills/redux.png'
import Info from "../components/info";

function Skills() {
  return (
    <>
      <Nav />
      <div id="container">
        <Info />
        <div className="pagina">
            <h2>Skills</h2>
            <h4 className="title-skills">Hard Skills</h4>
            <div id="hard-skills">
            <div id="div-hard-skills">
            <div id="hardskills">
                <div>
                    <img src={HTML} alt="HTML"/>HTML
                    </div>
                <div>
                    <img src={css} alt="css"/>CSS</div>
                <div><img src={js} alt="Javascript"/>Javascript</div>
                {/* Typescript */}
                <div><img src={typescript} alt="Typescript"/>Typescript</div>
                <div><img src={react} alt="react"/>React</div>
                <div>
                <img src={docker} alt="Docker"/>Docker</div>
                <div><img src={mysql} alt="MySQL" />MySQL</div>
                <div><img src={mongodb} alt="MongoDB"/>MongoDB</div>
                <div><img src={jest} alt="Jest" />Jest</div>
                <div><img src={redux} alt="Redux"/>Redux</div>
                <div><img src={nodejs} alt="nodeJs"/>NodeJS</div>
                <div><img src={contexapi} alt="Context API" />Context API</div>
                <div><img src={github} alt="Github" />Github</div>
                <div><img src={express} alt="express" />Express</div>
                <div><img src={jwt} alt="Json Web Token" />Json Web Token</div>
                <div><img src={reactTesting} alt="React Testing Library" />React Testing Library</div>
            </div>
            </div>
            </div>
            <div id="soft-skills">
            <h4 className="title-skills">Soft Skills</h4>
                <p>Metodologias Ágeis</p>
                <p>Colaboraração</p>
                <p>Proatividade</p>
                <p>Organização</p>
                <p>Trabalho em Equipe</p>
                <p>Habilidade de ouvir</p>
                <p>Adaptabilidade</p>
                <p>Resolução de conflitos</p>
                <p>Aprendizagem contínua</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Skills;
