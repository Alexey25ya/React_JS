import footerphoto from "../img/footerphoto.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer">

            <section class="subscribe">
                <div class="container footer__center">
                    <div class="subscribe__feedback">
                        <div class="subscribe__feedback__info">
                            <img src={footerphoto} width="96" height="96" alt="photo" />
                            <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                <i>a pulvinar purus condimentum</i>“
                            </p>
                        </div>
                    </div>
                    <div class="subscribe__form">
                        <form action="#">
                            <h4>subscribe</h4>
                            <h6>for our newletter and promotion</h6>
                            <div class="input__submit">
                                <input class="mail__input" type="email" placeholder="Enter Your Email" required />
                                <button class="button__submit" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section class="social">
                <div class="container social__container">
                    <div class="copyright">
                        <p>&copy; 2021 Brand All Rights Reserved.</p>
                    </div>
                    <div class="social__links">
                        <a href="#"><span class="iconify iconify__social" data-inline="false"
                            data-icon="ei:sc-facebook"></span></a>
                        <a href="#"><span class="iconify iconify__social" data-inline="false"
                            data-icon="ei:sc-instagram"></span></a>
                        <a href="#"><span class="iconify iconify__social" data-inline="false"
                            data-icon="typcn:social-pinterest"></span></a>
                        <a href="#"><span class="iconify iconify__social" data-inline="false"
                            data-icon="ei:sc-twitter"></span></a>
                    </div>
                </div>
            </section>

        </footer>
    );
}

export default Footer;