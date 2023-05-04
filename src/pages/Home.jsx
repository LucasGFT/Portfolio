import Nav from "../components/nav";
import '../style/styleHome.css'
import '../style/styleNav.css'
import myImage from '../assets/MinhaFoto.png'
import { formeiNaTrybe } from '../script/script'
import Info from "../components/info";
import { useEffect } from "react";


function Home() {

  useEffect(() => {
    const elementUl = document.querySelector('.ul-nav').children;
    elementUl[0].className = 'select'
  }, [])

  return (
    <>
      <Nav />
      <div id="container">
        <Info />
        <div className="pagina">
            <div className="divAvatar">
                <img src={myImage} alt="aa" className="avatar" />
                <div id="divSobreMim">
                    <p className="paragrafoSobreMim">
                    {formeiNaTrybe()[0]}
                    </p>
                    <p className="paragrafoSobreMim">
                    {formeiNaTrybe()[1]}
                    </p>
                    </div>    
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;
