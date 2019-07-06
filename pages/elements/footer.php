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
        <img src="../../assets/images/photos/vaches_boveroux_2.jpg" alt="Vache boveroux">
        <!-- src="php $c->image('image_du_pied_de_page',[1000,500]);" -->
        <a href="#" title="Nous rendre visite via GoogleMaps"><?php $c->text('message_du_lien_vers_google_maps');?></a>
    </div>
</footer>