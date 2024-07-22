
import logo from '../img/logo.png';
import menu from '../img/menu.svg';
import user from "../img/user.svg"
import basket from "../img/basket.svg"


function Header() {
    return (
        <header class="header">

            <div class="container header__wrap">
                <nav class="header__left">
                    <a class="header__logo" href="#">
                        <img src={logo} width="44" height="38" alt="logo" />
                    </a>
                </nav>
                <nav class="header__right">
                    <div class="header__item">
                        <div class="header__button">
                            <img src={menu} width="32" height="23" alt="menu" />
                            <div class="header__menu">
                                <h4>menu</h4>
                                <div class="header__menu__list">
                                    <h4>man</h4>
                                    <ul class="menu__list">
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Bags</a></li>
                                        <li><a href="#">Denim</a></li>
                                        <li><a href="#">T-Shirts</a></li>
                                    </ul>
                                </div>
                                <div class="header__menu__list">
                                    <h4>woman</h4>
                                    <ul class="menu__list">
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Jackets & Coats</a></li>
                                        <li><a href="#">Polos</a></li>
                                        <li><a href="#">T-Shirts</a></li>
                                        <li><a href="#">Shirts</a></li>
                                    </ul>
                                </div>
                                <div class="header__menu__list">
                                    <h4>kids</h4>
                                    <ul class="menu__list">
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Jackets & Coats</a></li>
                                        <li><a href="#">Polos</a></li>
                                        <li><a href="#">T-Shirts</a></li>
                                        <li><a href="#">Shirts</a></li>
                                        <li><a href="#">Bags</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header__item">
                        <a href="#"><img src={user} width="29" height="29" alt="user" /></a>
                    </div>
                    <div class="header__item">
                        <a href="#"><img src={basket} width="32" height="29" alt="basket" /></a>
                    </div>
                </nav>
            </div>

        </header>

    );
}

export default Header;