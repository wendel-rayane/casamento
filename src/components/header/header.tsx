import './header.css';
import { useRef } from 'react';
import logo from '/src/assets/logo-transparente.png';

function Header() {
  const menuRef = useRef<HTMLUListElement | null>(null);

  function toggleMenu(event: React.MouseEvent) {
    event.preventDefault();
    menuRef.current?.classList.toggle('ativo');
  }

  function removeMenu() {
    menuRef.current?.classList.remove('ativo');
  }

  return (
    <>
      <header className="header-bg">
        <div className="header container">
          <div className="menu">
            {/* <span>W & R</span> */}
            <img src={logo} alt="Logo" width={150} height={100} />
            <nav>
              <button className="botao-menu" onClick={toggleMenu}>
                Menu
              </button>
              <ul ref={menuRef}>
                <li onClick={removeMenu}>
                  <a href="#historia">Nossa história</a>
                </li>
                <li onClick={removeMenu}>
                  <a href="#carinho">Mensagem de carinho</a>
                </li>
                <li onClick={removeMenu}>
                  <a href="#pix">Nosso pix</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="detalhe-principal">
            <h1>Wendel e Rayane</h1>
            <p>16.01.2025</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
