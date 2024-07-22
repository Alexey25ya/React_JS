
import quality from "../img/quality.svg"
import sales from "../img/sales.svg"
import delivery from "../img/delivery.svg"
import card7 from "../img/card7.jpg"
import card8 from "../img/card8.jpg"
import card9 from "../img/card9.jpg"
import card10 from "../img/card10.jpg"
import card11 from "../img/card11.jpg"
import card12 from "../img/card12.jpg"
import card1 from "../img/card1.jpg"
import card3 from "../img/card3.jpg"
import card4 from "../img/card4.jpg"
import { Link } from 'react-router-dom';

function Catalog() {
    return (
        <div>

            <header class="catalog">
                <div class="container catalog__header">
                    <h1>new arrivals</h1>
                    <nav>
                        <ul class="catalog__breadcrumbs">
                            <li><Link to={`/main`}>home</Link></li>
                            <li><a href="#">men</a></li>
                            <li>new arrivals</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>

                <section class="container filters">
                    <div class="filters__left">
                        <details class="filter">
                            <summary class="filter__main__title"> <span class="summary__span">filter</span> <svg
                                class="filter__svg" width="15" height="10" viewBox="0 0 15 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
                            </svg></summary>
                            <details class="filter__class">
                                <summary class="filter__title">category</summary>
                                <ul class="filter__list">
                                    <li><a href="#">Bags</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Hoodies & Sweatshirts</a></li>
                                    <li><a href="#">Jackets & Coats</a></li>
                                    <li><a href="#">Polos</a></li>
                                    <li><a href="#">Shirts</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Sweaters & Knits</a></li>
                                    <li><a href="#">T-Shirts</a></li>
                                    <li><a href="#">Tanks</a></li>
                                </ul>
                            </details>
                            <details class="filter__class">
                                <summary class="filter__title">brand</summary>
                                <ul class="filter__list">
                                    <li><a href="#">Balenciaga</a></li>
                                    <li><a href="#">Gucci</a></li>
                                    <li><a href="#">Moncler</a></li>
                                    <li><a href="#">D&G</a></li>
                                    <li><a href="#">Versace</a></li>
                                    <li><a href="#">Prada</a></li>
                                </ul>
                            </details>
                            <details class="filter__class">
                                <summary class="filter__title">designer</summary>
                                <ul class="filter__list">
                                    <li><a href="#">BTom Ford</a></li>
                                    <li><a href="#">Betsey Johnson</a></li>
                                    <li><a href="#">Ralph Lauren</a></li>
                                    <li><a href="#">Marc Jacobs</a></li>
                                    <li><a href="#">Valentino</a></li>
                                    <li><a href="#">Dolce & Gabbana</a></li>
                                </ul>
                            </details>
                        </details>
                    </div>
                    <div class="filters__right">
                        <div class="features features_hov-pink">trending now <span class="iconify features_icon"
                            data-inline="false" data-icon="majesticons:chevron-down-line"></span></div>
                        <div class="features features_hov features_hov-pink">size <span class="iconify features_icon"
                            data-inline="false" data-icon="majesticons:chevron-down-line"></span>
                            <div class="features__checkbox">
                                <label for="xs">
                                    <input type="checkbox" id="xs" />xs
                                </label>
                                <label for="s">
                                    <input type="checkbox" id="s" />s
                                </label>
                                <label for="m">
                                    <input type="checkbox" id="m" />m
                                </label>
                                <label for="l">
                                    <input type="checkbox" id="l" />l
                                </label>
                            </div>
                        </div>
                        <div class="features features_hov-pink">price <span class="iconify features_icon" data-inline="false"
                            data-icon="majesticons:chevron-down-line"></span></div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="cards">
                            <article class="card">
                                <Link to={`/product`}>
                                    <img class="card__img" src={card1} alt="card1" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card12} alt="card12" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card3} alt="card3" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <a class="card-add__cart" href="#">
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </a>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card4} alt="card4" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card11} alt="card11" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card10} alt="card10" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card9} alt="card9" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card8} alt="card8" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                            <article class="card">
                                <Link class="card_link" to={`/product`}>
                                    <img class="card__img" src={card7} alt="card7" />
                                    <div class="card__text">
                                        <h4>ellery x m'o capsule</h4>
                                        <p>Known for her sculptural takes on traditional tailoring,
                                            Australian
                                            arbiter of cool
                                            Kym Ellery teams up with Moda
                                            Operandi.</p>
                                        <p class="price">$52.00</p>
                                    </div>
                                </Link>
                                <div class="card-add">
                                    <Link class="card-add__cart" to={`/cart`}>
                                        <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                        <p>Add to Cart</p>
                                    </Link>
                                </div>
                            </article>

                        </div>

                        <nav>
                            <ul class="pagination">
                                <li><a href="#"><span class="iconify pagination__icon" data-inline="false"
                                    data-icon="dashicons:arrow-left-alt2" style={{ fontsize: "20px" }}></span></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">.....</a></li>
                                <li><a href="#">20</a></li>
                                <li><a href="#"><span class="iconify pagination__icon" data-inline="false"
                                    data-icon="dashicons:arrow-right-alt2" style={{ fontsize: "20px" }}></span></a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section class="privileges">
                    <div class="container privileges__info">
                        <div class="privileges__offer">
                            <img src={delivery} width="45" height="32" alt="delivery" />
                            <h3>Free Delivery</h3>
                            <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                                next&#8209;generation
                                innovation with extensivemodels.</p>
                        </div>
                        <div class="privileges__offer">
                            <img src={sales} width="40" height="40" alt="sales" />
                            <h3>Sales & discounts</h3>
                            <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                                next&#8209;generation
                                innovation with extensivemodels.</p>
                        </div>
                        <div class="privileges__offer">
                            <img src={quality} width="47" height="35" alt="quality" />
                            <h3>Quality assurance</h3>
                            <p>Worldwide delivery on&nbsp;all. Authorit tively morph
                                next&#8209;generation
                                innovation with extensivemodels.</p>
                        </div>
                    </div>
                </section>
            </main>

        </div >
    );
}

export default Catalog;
