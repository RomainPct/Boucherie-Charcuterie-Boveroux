<?php
$c = new CandidePage('footer');
?>
<footer class="footer__container">
    <div class="footer__container__adress">
        <h4><?php $c->text('nom_entreprise');?></h4>
        <ul>
            <li><?php $c->text('ligne_numero_1');?></li>
            <li><?php $c->text('ligne_numero_2');?></li>
            <li><?php $c->text('ligne_numero_3');?></li>
        </ul>
    </div>
    <div class="footer__container__visite imageBox degradeLeftLigthDark filterBottomDark">
        <img src="../../assets/images/photos/vaches_boveroux_2.jpg" alt="Vache boveroux">
        <!-- src="php $c->image('image_du_footer',[1000,500]);" -->
        <a href="#" title="Nous rendre visite via GoogleMaps"><?php $c->text('nom_lien_vers_google_maps');?></a>
    </div>
</footer>