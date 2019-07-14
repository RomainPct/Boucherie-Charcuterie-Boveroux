<?php
$c = new CandidePage('pied_de_page');
?>
<footer class="footer__container">
    <div class="footer__container__adress">
        <div class="footer__container__adress__list">
            <h4><?php $c->text('nom_entreprise');?></h4>
            <ul>
                <li><?php $c->text('adresse');?></li>
                <li><?php $c->text('téléphone');?></li>
                <li><?php $c->text('mail');?></li>
            </ul>
        </div>
    </div>
    <div class="footer__container__visite imageBox degradeLeftLigthDark filterBottomDark mobile__imageBox mobile__degradeLeftLigthDark">
        <img src="<?php $c->image('image_du_pied_de_page',[960,250]);?>" alt="Vache boveroux">
        <a class="tertiaryButton" href="https://www.google.fr/maps/place/Cauchon+Rach%C3%ABl/@49.3978757,4.6978363,17z/data=!3m1!4b1!4m5!3m4!1s0x47ea371b4b29cf45:0xb10e227341c7d9df!8m2!3d49.3978722!4d4.700025" title="Nous rendre visite via GoogleMaps">Nous rendre visite via GoogleMaps</a>
    </div>
</footer>