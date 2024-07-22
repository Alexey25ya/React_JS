import card1 from "../img/cart_card1.jpg"
import card2 from "../img/cart_card2.jpg"
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div>


            <header class="cart">
                <div class="container cart__header">
                    <h1>SHOPPING CART</h1>

                </div>
            </header >
            <main>
                <div class="container shopping">
                    <section class="shop__cart">
                        <form action="#">
                            <div class="cart__cards">
                                <article class="cart__card">
                                    <Link to={`/product`}><img src={card1} alt="cart_card1" /></Link>
                                    <div class="cart__card-text">
                                        <span class="iconify cart__card-icon" data-inline="false" data-icon="bi:x"></span>
                                        <h3>mango people t-&nbsp;shirt</h3>
                                        <span>Price: <span class="intro__text__decor">$300</span></span>
                                        <span>Color: Red</span>
                                        <span>Size: XL</span>
                                        <span class="quantity">Quantity: <input class="quantity__input" type="number"
                                            placeholder="1" /></span>
                                    </div>
                                </article>
                                <article class="cart__card">
                                    <Link to={`/product`}><img src={card2} alt="cart_card2" /></Link>
                                    <div class="cart__card-text">
                                        <span class="iconify cart__card-icon" data-inline="false" data-icon="bi:x"></span>
                                        <h3>mango people t-&nbsp;shirt</h3>
                                        <span>Price: <span class="intro__text__decor">$300</span></span>
                                        <span>Color: Red</span>
                                        <span>Size: XL</span>
                                        <span class="quantity">Quantity: <input class="quantity__input" type="number"
                                            placeholder="1" /></span>
                                    </div>
                                </article>
                            </div>
                            <div class="shop__cart-button">
                                <button type="reset">clear shopping cart</button>
                                <Link to={`/catalog`}>continue shopping</Link>
                            </div>
                        </form>
                    </section>
                    <section class="shop__forms">
                        <form class="ship__form" action="#">
                            <h4>shipping adress</h4>
                            <input type="text" placeholder="Bangladesh" required />
                            <input type="text" placeholder="State" required />
                            <input type="number" placeholder="Postcode/ZIP" required />
                            <button type="submit">get a quote</button>
                        </form>
                        <form class="check__form" action="#">
                            <h6>sub total <span>$900</span></h6>
                            <h4>grand total <span>$900</span></h4>

                            <button type="submit">proceed to checkout</button>
                        </form>
                    </section>
                </div>

            </main>





        </div>
    );
}

export default Cart;