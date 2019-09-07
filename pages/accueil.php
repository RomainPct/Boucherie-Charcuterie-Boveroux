<?php
$c = new CandidePage('accueil')
?>
<main class="home__main">
    <h1>Charcuterie Boveroux</h1>
    <h1>Viande bio</h1>
    <section class="homeSection imageBox degradeBottomDark">
                        <div class="homeSection__textandimg__textBlock comingFade">
                        <h2><?php $c->text('titre');?></h2>
                    <div class="homeSection__textandimg__textBlock__text">
                        <h3><?php $c->text('sous_titre');?></h3>
                        <p class="homeSection__textandimg__textBlock__text__paragraph"><?php $c->text('texte_page_accueil');?></p>
                        <a href="produits" title="bouton vers produits" class="primaryButton">Découvrir les produits</a>
                    </div>
                </div>
        <div class="homeSection__textandimg imageBox degradeBottomDark filterBottomDark">
            <div class="homeSection__textandimg__img">
                <img src="../assets/images/photos/vaches_boveroux_7.jpg" alt="images de vaches">
                </div>

        </div>
    </section>
    <section class="homeSection__valeurs comingFade">
            <div class="homeSection__valeurs__leftDiv">
                <div class="homeSection__valeurs__leftDiv__title">
                    <h3>Nos valeurs</h3>
                </div>
                <div class="homeSection__valeurs__leftDiv__logo">
                    <div class="homeSection__valeurs__leftDiv__logo__img">
                        <img src="../assets/images/icones/heart.svg" alt="logo d'un coeur">
                        <p>Passion familialle</p>
                    </div>
                    <div class="homeSection__valeurs__leftDiv__logo__img">
                        <img id="logobio" src="../assets/images/icones/bio.png" alt="logo bio">
                        <p>Production bio</p>
                    </div>
                    <div class="homeSection__valeurs__leftDiv__logo__img" id="rightImg">
                        <img src="../assets/images/icones/meat.svg" alt="logo d'un morceau de viande">
                        <p id="paragraph_meat">Viande de qualité</p>
                    </div>
                </div>
            </div>
            <div class="homeSection__valeurs__rightDiv">
                <h3><?php $c->text('titre_histoire');?></h3>
                <p><?php $c->text('texte_histoire');?></p>
                <a href="quisommesnous" title="Bouton pour en apprendre plus" class="secondaryButton">En apprendre plus</a>
            </div>
    </section>
</main>
