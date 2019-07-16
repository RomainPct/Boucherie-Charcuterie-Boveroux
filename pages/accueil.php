<?php
$c = new CandidePage('accueil')
?>
<main class="home__main">
    <section class="home__section">
                        <div class="home__section__textandimg__textBlock">
                        <h2><?php $c->text('titre');?></h2>
                    <div class="home__section__textandimg__textBlock__text">
                        <h3><?php $c->text('sous_titre');?></h3>
                        <p class="home__section__textandimg__textBlock__text__paragraph"><?php $c->text('texte_page_accueil');?></p>
                        <a href="produits" title="bouton vers produits" class="primaryButton">Découvrir les produits</a>
                    </div>
                </div>
        <div class="home__section__textandimg imageBox degradeBottomDark filterBottomDark">
            <div class="home__section__textandimg__img">
                <img src="../assets/images/photos/vaches_boveroux_7.jpg" alt="images de vaches">
                </div>

        </div>
        <div class="home__section__secondBlock">
            <div class="home__section__secondBlock__leftDiv">
                <div class="home__section__secondBlock__leftDiv__title">
                    <h3>Nos valeurs</h3>
                </div>
                <div class="home__section__secondBlock__leftDiv__logo">
                    <div class="home__section__secondBlock__leftDiv__logo__img">
                        <img src="../assets/images/icones/heart.svg" alt="logo d'un coeur">
                        <p>Passion familialle</p>
                    </div>
                    <div class="home__section__secondBlock__leftDiv__logo__img">
                        <img id="logobio" src="../assets/images/icones/bio.png" alt="logo bio">
                        <p>Production bio</p>
                    </div>
                    <div class="home__section__secondBlock__leftDiv__logo__img" id="rightImg">
                        <img src="../assets/images/icones/meat.svg" alt="logo d'un morceau de viande">
                        <p id="paragraph_meat">Viande de qualité</p>
                    </div>
                </div>
            </div>
            <div class="home__section__secondBlock__rightDiv">
                <h3><?php $c->text('titre_histoire');?></h3>
                <p><?php $c->text('texte_histoire');?></p>
                <a href="quisommesnous" title="Bouton pour en apprendre plus" class="secondaryButton">En apprendre plus</a>
            </div>
        </div>
    </section>
</main>
