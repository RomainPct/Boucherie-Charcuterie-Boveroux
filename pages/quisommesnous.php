<?php
$c = new CandidePage('qui_sommes_nous')
?>
<main class="whoweare__container">
    <h1>Qui sommes nous ?</h1>
    <div class="whoweare__container__history">
        <div class="whoweare__container__history__text">
            <h2><?php $c->text('titre_partie_histoire');?></h2>
            <p><?php $c->text('texte_partie_histoire');?></p>
        </div>
        <div class="whoweare__container__history__picture imageBox filterBottomDark degradeLeftDark">
            <img src="<?php $c->image('image_partie_histoire',[1000,500]);?>" alt="Vaches boveroux">
        </div>
    </div>
    <div class="whoweare__container__bioProd">
        <div class="whoweare__container__bioProd__picture">
            <img src="../assets/images/icones/bio.png" alt="Logo agriculture biologique">
        </div>
        <div class="whoweare__container__bioProd__text">
            <h3><?php $c->text('titre_partie_production_bio');?></h3>
            <p><?php $c->text('texte_partie_production_bio');?></p>
        </div>
    </div>
    <div class="whoweare__container__quality">
        <div class="whoweare__container__quality__picture imageBox filterBottomDark degradeRightDark">
            <img src="<?php $c->image('image_partie_production_bio',[500,250]);?>" alt="Viande de boeuf boveroux">
        </div>
        <div class="whoweare__container__quality__text">
            <h3><?php $c->text('titre_partie_qualite');?></h3>
            <p><?php $c->text('texte_partie_qualite');?></p>
        </div>
    </div>
    <div class="whoweare__container__button">
        <a class="primaryButton" href="produits" title="Découvrir nos produits"><?php $c->text('texte_du_bouton_qui_renvoie_vers_la_page_produit');?></a>
    </div>
</main>