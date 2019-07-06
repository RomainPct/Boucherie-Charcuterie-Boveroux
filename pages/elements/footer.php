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
    <div class="footer__container__visite imageBox degradeLeftLigthDark filterBottomDark">
        <img src="<?php $c->image('image_du_pied_de_page',[500,150]);?>" alt="Vache boveroux">
        <a href="https://www.google.fr/maps/place/38+Rue+du+Pr%C3%A9sident+Poincar%C3%A9,+55100+Verdun/@49.1582801,5.384972,17z/data=!3m1!4b1!4m5!3m4!1s0x47eb1bff53310d53:0xbd541280c1e0ba4a!8m2!3d49.1582766!4d5.3871607" title="Nous rendre visite via GoogleMaps"><?php $c->text('message_du_lien_vers_google_maps');?></a>
    </div>
</footer>