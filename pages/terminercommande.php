<?php
$c = new CandidePage('terminer_ma_commande')
?>
<main class="finishOrder__container">
    <h1>Terminer ma commande</h1>
    <div class="finishOrder__container__left">
        <h2><?php $c->text('titre_partie_terminer_ma_commande');?></h2>
        <p><?php $c->text('texte_partie_terminer_ma_commande');?></p>
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
                    <div class="finishOrder__container__right__form__summary__summaryBox__line">
                        <div class="finishOrder__container__right__form__summary__summaryBox__line__product">Poitrine de veau</div>
                        <div class="finishOrder__container__right__form__summary__summaryBox__line__spec">
                            <div class="finishOrder__container__right__form__summary__summaryBox__line__spec__price">29€</div>
                            <a class="finishOrder__container__right__form__summary__summaryBox__line__spec__minus primaryButton" href="#" title="moins">-</a>
                            <div class="finishOrder__container__right__form__summary__summaryBox__line__spec__quantity">1</div>
                            <a class="finishOrder__container__right__form__summary__summaryBox__line__spec__more primaryButton" href="#" title="plus">+</a>
                        </div>
                    </div>
                    <div class="finishOrder__container__right__form__summary__summaryBox__lineTotalCost">
                        <div>Total : 98€</div>
                    </div>
                </div>
            </div>



            <div class="finishOrder__container__right__form__message">
                <label for="POST-message">Un petit message pour nous ?</label>
                <textarea type="text" name="message" id="POST-message"></textarea>
            </div>
            <div class="finishOrder__container__right__form__send">
                <button class="primaryButton sendOrder" type="submit">Envoyer ma commande</button>
            </div>
        </form>
    </div>
</main>