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
        <form action="" method="post" class="finishOrder__container__right__form">
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
                <div></div>
            </div>
            <div class="finishOrder__container__right__form__message">
                <label for="POST-message">Un petit message pour nous ?</label>
                <textarea type="text" name="message" id="POST-message"></textarea>
            </div>
            <div class="finishOrder__container__right__form__send">
                <a class="primaryButton sendOrder" href="#" title="Envoyer ma commande">Envoyer ma commande</a>
            </div>
        </form>
    </div>
</main>
<!-- Le mettre sur une page séparé finalement -->
<div class="confirmedOrder__container">
        <h2>Commande envoyée</h2>
        <p>Merci de nous avoir fait confiance, une réponse vous sera transmise d’ici 48h</p>
        <a class="secondaryButton" href="accueil" title="Revenir à l'accueil">Revenir à l'accueil</a>
</div>