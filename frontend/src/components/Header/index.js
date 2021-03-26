import logo from '../../assets/icons/logo-nome.svg'
import "./style.css";

const Header = () => {
  return (
    <nav id="navbar__container">
      <div id="header__nav">
        <div id="container">
          <div id="header__name">
                <img
                    id="header-logo"
                    src={logo}
                    alt="Logo-Kabellos"
                />
            </div>
          <div id="search__box">
            <input type="search" placeholder="Procure seus produtos" />
            <span class="fa fa-search"></span>
          </div>
          <div id="right__menu">
            <div id="header__login">  
                <div id="header__saudacao">Olá, visitante</div>
                <a id="header__login__link" href="#">
                    Entre na conta
                </a>             
            </div>  
            <div id="shopping__cart">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>  
        </div>
      </div>
    </nav>
  );
};

export default Header;
