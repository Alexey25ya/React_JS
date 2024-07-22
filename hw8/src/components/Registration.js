import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div>
            <header class="reg">
                <div class="container reg__header">
                    <h1>registration</h1>
                </div>
            </header>

            <main>
                <div class="container registration">
                    <section class="reg__input">
                        <form class="reg__form" action="#">
                            <h4>Your Name</h4>
                            <input class="input__name" type="text" placeholder="First Name" autofocus required />
                            <input class="input__last" type="text" placeholder="Last Name" required />
                            <div class="check__gender">
                                <input type="radio" name="gender" id="men" checked /> <label class="check__label"
                                    for="men">Male</label>
                                <input type="radio" name="gender" id="women" /> <label class="check__label"
                                    for="women">Female</label>
                            </div>
                            <h4>Login details</h4>
                            <input class="input__mail" type="email" placeholder="Email" required />
                            <input class="input__pass" type="password" placeholder="Password" required minlength="8" />
                            <p class="text__reg">Please use 8 or more characters, with at least 1 number and a mixture of
                                uppercase and lowercase
                                letters</p>
                            <button class="reg__submit" type="submit">join now <span class="iconify icon__submit"
                                data-inline="false" data-icon="bi:arrow-right" style={{ fontsize: '20px' }}></span></button>
                        </form>
                    </section>

                    <section class="reg__info">
                        <h2>loyalty has its perks</h2>
                        <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these
                            as
                            soon as you
                            join:</p>
                        <p><span class="iconify icon__text" data-inline="false" data-icon="websymbol:ok"></span>15%
                            off welcome offer</p>
                        <p><span class="iconify icon__text" data-inline="false" data-icon="websymbol:ok"></span>Free
                            shipping, returns and exchanges on all orders</p>
                        <p><span class="iconify icon__text" data-inline="false" data-icon="websymbol:ok"></span>$10
                            off a purchase on your birthday</p>
                        <p><span class="iconify icon__text" data-inline="false" data-icon="websymbol:ok"></span>Early
                            access to products</p>
                        <p><span class="iconify icon__text" data-inline="false" data-icon="websymbol:ok"></span>Exclusive offers
                            &
                            rewards</p>
                    </section>
                </div>
            </main>

        </div>
    );
}

export default Registration;