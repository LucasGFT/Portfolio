import Nav from "../components/nav";
import '../style/styleSobreMim.css'
import '../style/styleNav.css'
import Info from "../components/info";

function SobreMim() {
  return (
    <>
      <Nav />
      <div id="container">
        <Info />
        <div className="pagina">
            <h2>Sobre Mim</h2>
            <section className="formacao-academica">
                <h3 className="education__heading">Formação Acadêmica</h3>
                <ul className="education__list">
                  <li className="education__item">
                    <h5>2019 - 2021</h5>
                    <div>
                        <h3 className="education__title">Ensino Médio</h3>
                        <p>Rede de Ensino Apogeu</p>
                    </div>
                  </li>
                  <li className="education__item">
                    <h5>2022 - 2023</h5>
                    <div>
                        <h3 className="education__title">Desenvolvedor Web Full Stack</h3>
                        <p>Trybe</p>
                    </div>
                  </li>
                </ul>
              </section>
              <section>
                  <h3>Cursos e certificados</h3>
                  <ul className="certificados">
                    <li>
                        <a href="https://www.credential.net/5bfa0871-8b09-48e0-9290-71e69dbaace8" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios/452/diploma.png" alt="Ícone de Diploma" width="50" />
                            <span className="certificate__date">Fundamento do Desenvolvimento Web, emitido pela Trybe</span>                        
                        </a>
                    </li>
                    <li>
                        <a href="https://www.credential.net/4b6be73d-56a5-4fee-b00b-b6c5d26f2637" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios/452/diploma.png" alt="Ícone de Diploma" width="50" />
                            <span className="certificate__date">Front End, emitido pela Trybe</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://scl.io/oh7SqCO" target="_blank" rel="noreferrer">
                          <img src="https://img.icons8.com/ios/452/diploma.png" alt="Ícone de Diploma" width="50" />
                          <span className="certificate__date">Back End, emitido pela Trybe</span>
                      </a>
                    </li>
                  </ul>
              </section>
        </div>
    </div>
    </>
  );
}

export default SobreMim;
