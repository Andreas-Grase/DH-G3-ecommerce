import './style.css'

const MenuLateral = () => {

    return (

        <section className="menu-lateral">
            <div className="menu-lateral-inicio">
                <h3>FILTRO</h3>
                <nav className="menu">
                    <ul>
                        <li className="bt_menu">
                            <a href="#">
                                <span className="abrir-submenu">CATEGORIA</span>
                                <span><i class="fas fa-chevron-down"></i></span>
                            </a>
                        </li>
                            <ul>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                            </ul>
                        <li className="bt_menu">
                            <a href="#">
                                <span className="abrir-submenu">CATEGORIA</span>
                                <span><i class="fas fa-chevron-down"></i></span>
                            </a>
                        </li>
                            <ul>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                            </ul>
                        <li className="bt_menu">
                            <a href="#">
                                <span className="abrir-submenu">CATEGORIA</span>
                                <span><i class="fas fa-chevron-down"></i></span>
                            </a>
                        </li>
                            <ul>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                            </ul>
                        <li className="bt_menu">
                            <a href="#">
                                <span className="abrir-submenu">CATEGORIA</span>
                                <span><i class="fas fa-chevron-down"></i></span>
                            </a>
                        </li>
                            <ul>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                                <li><a href="#">Produto</a></li>
                            </ul> 
                    </ul>
                </nav>
            </div>
            
            <div className="menu-lateral-fim">
                <h3>FILTRO</h3>
                <table>
                    <tr>
                        <td><a href="#">MARCA</a></td>
                        <td><a href="#">MARCA</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">MARCA</a></td>
                        <td><a href="#">MARCA</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">MARCA</a></td>
                        <td><a href="#">MARCA</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">MARCA</a></td>
                        <td><a href="#">MARCA</a></td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default MenuLateral