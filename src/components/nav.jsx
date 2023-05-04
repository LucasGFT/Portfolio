import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  const locationActual = () => {
    const path = window.location.pathname.slice(1)
    const elementUl = document.querySelector('.ul-nav').children;
    switch (path) {
      case 'portfolio/sobreMim':
        elementUl[1].className = 'select'
        break;
      case 'portfolio/projetos':
        elementUl[2].className = 'select'
        break;
      case 'portfolio/skills': 
        elementUl[3].className = 'select'
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    locationActual()
  }, [])

    return (
      <nav>
          <ul className="ul-nav">
              <li><Link to="/portfolio">Home</Link></li>
              <li><Link to="/portfolio/sobreMim">Sobre Mim</Link></li>
              <li><Link to="/portfolio/projetos">Projetos</Link></li>
              <li><Link to="/portfolio/skills">Skills</Link></li>
          </ul>
      </nav>
    );
  }
  
  export default Nav;
  