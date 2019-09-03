<main class="finishOrder__container comingFade">
    <h1>Terminer ma commande</h1>
    <div class="finishOrder__container__left">
        <h2>Terminer ma<br>commande</h2>
        <p>Complétez vos informations et laissez nous un petit message si vous le souhaitez ! Une fois votre commande envoyée, nous vous tiendrons au courant de son avancé par email.</p>
    </div>
    <div class="finishOrder__container__right">
        <form action="commandeconfirmee" method="post" class="finishOrder__container__right__form">
            <div class="finishOrder__container__right__form__name">
                <label for="POST-name">Votre nom et prénom</label>
                <input type="text" name="name" id="POST-name">
                <span></span>
            </div>
            <div class="finishOrder__container__right__form__email">
                <label for="POST-email">Votre adresse email</label>
                <input type="email" name="email" id="POST-email">
                <span></span>
            </div>
            <div class="finishOrder__container__right__form__summary">
                <p>Résumé de votre commande</p>
                <div class="finishOrder__container__right__form__summary__summaryBox">
                    <div class="finishOrder__container__right__form__summary__summaryBox__lineTotalCost">
                        <div>Total : <span id="postTotalPrice"></span>€</div>
                    </div>
                </div>
            </div>
            <input type="hidden" name="basketContent" id="basketContentInput">
            <input type="hidden" name="cellphonechbt">
            <div class="finishOrder__container__right__form__message">
                <label for="POST-message">Un petit message pour nous ? (optionnel)</label>
                <textarea type="text" name="message" id="POST-message"></textarea>
            </div>
            <div class="finishOrder__container__right__form__send">
                <button class="primaryButton sendOrder" type="submit">Envoyer ma commande</button>
            </div>
        </form>
    </div>
</main>