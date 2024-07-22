import quality from "../img/quality.svg"
import delivery from "../img/delivery.svg"
import sales from "../img/sales.svg"
import card6 from "../img/card6.jpg"
import card5 from "../img/card5.jpg"
import card4 from "../img/card4.jpg"
import card3 from "../img/card3.jpg"
import card2 from "../img/card2.jpg"
import card1 from "../img/card1.jpg"
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main>

            <section class="intro">
                <div class="container intro__wrap">
                    <div class="intro__wrap-height"></div>
                    <div class="intro__text">
                        <h1>
                            <span class="intro__text__top">the brand</span>
                            of luxerious <span class="intro__text__decor">fashion</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section>
                <div class="container offers">
                    <div class="offers__block offers__women">
                        <a class="offers__block-link" href="#">30% off <span class="font__link">for women</span></a>
                    </div>
                    <div class="offers__block offers__men">
                        <a class="offers__block-link" href="#">hot deal <span class="font__link">for men</span></a>
                    </div>
                    <div class="offers__block offers__kids">
                        <a class="offers__block-link" href="#">new arrivals <span class="font__link">for kids</span></a>
                    </div>
                    <div class="offers__block offers__accesories">
                        <a class="offers__block-link-acces" href="#">luxerious & trendy <span
                            class="font__link">accesories</span></a>
                    </div>
                </div>
            </section>

            <section>
                <div class="container content">
                    <h2>Fetured Items</h2>
                    <p>Shop for items based on what we featured in this week</p>


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
                                <img class="card__img" src={card2} alt="card2" />
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
                                <Link class="card-add__cart" to={`/cart`}>
                                    <span class="iconify cart_icon" data-inline="false" data-icon="mdi-light:cart"></span>
                                    <p>Add to Cart</p>
                                </Link>
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
                                <img class="card__img" src={card5} alt="card5" />
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
                                <img class="card__img" src={card6} alt="card6" />
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

                        <div class="cards__button">
                            <a href="catalog.html" class="button">Browse All Product</a>
                        </div>

                    </div>
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

        </main>);
}

export default Main;

