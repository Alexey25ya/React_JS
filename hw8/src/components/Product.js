import card1 from "../img/card1.jpg"
import card2 from "../img/card2.jpg"
import card3 from "../img/card3.jpg"
import photo from "../img/product_photo.jpg"
import { Link } from 'react-router-dom';

function Product() {
    return (
        <div>

            <header class="product">
                <div class="container product__header">
                    <h1>new arrivals</h1>
                    <nav>
                        <ul class="product__breadcrumbs">
                            <li><Link to={`/main`}>home</Link></li>
                            <li><a href="#">men</a></li>
                            <li>new arrivals</li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>

                <section class="product__img">
                    <button class="product__img__button"><span class=" iconify pib__icon" data-inline="false"
                        data-icon="dashicons:arrow-left-alt2"></span>
                    </button>
                    <div class="product__img-img">
                        <img src={photo} alt="photo" />
                    </div>
                    <button class="product__img__button"><span class="iconify pib__icon" data-inline="false"
                        data-icon="dashicons:arrow-right-alt2"></span>
                    </button>
                </section>

                <section>
                    <div class="container product__info">
                        <p class="product__info__h">women collection</p>
                        <span></span>
                        <h3>moschino cheal and chic</h3>
                        <p class="product__info__text">Compellingly actualize fully researched processes before proactive
                            outsourcing. Progressively
                            syndicate collaborative
                            architectures before cutting-edge services. Completely visualize parallel core competencies rather
                            than exceptional
                            portals.</p>
                        <p class="product__info__price">$561</p>

                        <div class="product__info__features">
                            <button class="features features_hov-pink">choose color <span class="iconify features_icon"
                                data-inline="false" data-icon="majesticons:chevron-down-line"></span></button>
                            <button class="features features_hov-pink">choose size <span class="iconify features_icon"
                                data-inline="false" data-icon="majesticons:chevron-down-line"></span></button>
                            <button class="features features_hov-pink">quantity <span class="iconify features_icon"
                                data-inline="false" data-icon="majesticons:chevron-down-line"></span></button>
                        </div>
                        <Link to={`/cart`} class="product__info__button" type="submit"><span class="iconify pib__icon" data-inline="false"
                            data-icon="mdi-light:cart"></span><span class="pib__text">Add to
                                Cart</span></Link>
                    </div>
                </section>

                <section>
                    <div class="container products__bottom">

                        <article class="card">
                            <Link to={`/catalog`}>
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
                            <Link class="card_link" to={`/catalog`}>
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
                            <Link class="card_link" to={`/catalog`}>
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

                    </div>
                </section>

            </main>

        </div>
    );
}

export default Product;