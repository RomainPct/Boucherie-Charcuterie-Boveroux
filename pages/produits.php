<main>

    <!--
        Pour chaque produit, sur la même div que la class prodSectionList__product, faut ajouter
        data-productid -> correspond à l'id de l'item de candide
        data-producttype -> correspond au nom de la collection candide
        exemple : <div class="prodSectionList__product" data-productid="19" data-producttype="boeuf">
    -->
<?php
$c = new CandidePage('produits');
$c1 = new CandideCollection('charcuterie');
$c2 = new CandideCollection('porc');
$c3 = new CandideCollection('veau');
$c4 = new CandideCollection('boeuf');
$c5 = new CandideCollection('plats_cuisines');
?>
    <section class="prodSection">
        <h2>Nos produits</h2>
        <div class="prodSection__cat">
            <div class="catlist">
                <a href="#" data-target="all" class="secondaryButton">Tous</a>
                <a href="#" data-target="charcuterie" class="tertiaryButton">Charcuterie</a>
                <a href="#" data-target="porc" class="tertiaryButton">Porc</a>
                <a href="#" data-target="veau" class="tertiaryButton">Veau</a>
                <a href="#" data-target="boeuf" class="tertiaryButton">Boeuf</a>
                <a href="#" data-target="plats_cuisines" class="tertiaryButton">Plats cuisinés</a>
            </div>
                <a href="terminercommande" class="primaryButton" id="validResp">Valider ma commande</a>
        </div>
        <div class="prodSectionList">

            <?php
            foreach($c1->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product  product all charcuterie" data-productid="<?php echo $id ?>" data-producttype="charcuterie">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p><?php $c1->text('nom_du_produit',$id)?></p>
                        <p><?php $c1->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            ?>
            <?php
            foreach($c2->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product product all porc" data-productid="<?php echo $id ?>" data-producttype="porc">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p><?php $c2->text('nom_du_produit',$id)?></p>
                        <p><?php $c2->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            ?>
            <?php
            foreach($c3->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product product all veau" data-productid="<?php echo $id ?>" data-producttype="veau">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p><?php $c3->text('nom_du_produit',$id)?></p>
                        <p><?php $c3->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            ?>
            <?php
            foreach($c4->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product product all boeuf" data-productid="<?php echo $id ?>" data-producttype="boeuf">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p><?php $c4->text('nom_du_produit',$id)?></p>
                        <p><?php $c4->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            ?>
            <?php
            foreach($c5->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product product all plats_cuisines" data-productid="<?php echo $id ?>" data-producttype="plats_cuisines">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p><?php $c5->text('nom_du_produit',$id)?></p>
                        <p><?php $c5->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            ?>
        </div>
    </section>
    <div id="detailedProductContainer"></div> <!-- Ne supprime surtout pas -->
</main>