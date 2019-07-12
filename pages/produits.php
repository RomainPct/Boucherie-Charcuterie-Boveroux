<main>

    <!--
        Pour chaque produit, sur la même div que la class prodSectionList__product, faut ajouter
        data-productid -> correspond à l'id de l'item de candide
        data-producttype -> correspond au nom de la collection candide
        exemple : <div class="prodSectionList__product" data-productid="19" data-producttype="boeuf">
    -->
<?php
$c = new CandidePage('produits');
$c1 = new CandideCollection('produits');
?>
    <section class="prodSection">
        <h2>Nos produits</h2>
        <div class="prodSection__cat">
            <div>
                <a href="" class="secondaryButton">Tous</a>
                <a href="" class="tertiaryButton">Charcuterie</a>
                <a href="" class="tertiaryButton">Porc</a>
                <a href="" class="tertiaryButton">Veau</a>
                <a href="" class="tertiaryButton">Boeuf</a>
                <a href="" class="tertiaryButton">Plats cuisinés</a>
            </div>
                <a href="terminercommande" class="primaryButton">Valider ma commande</a>
        </div>
        <div class="prodSectionList">

            <?php
            foreach($c1->avalaibleItemIds()as $id){
                ?>
                <div class="prodSectionList__product" data-productid="19" data-producttype="boeuf">
                    <div class="prodSectionList__product__contain">
                        <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                        <p id="prodtitle"><?php $c1->text('nom_du_produit',$id)?></p>
                        <p><?php $c1->text('prix',$id)?></p>
                        <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                    </div>
                </div>
                <?php

            }
            
            ?>

            <div class="prodSectionList__product" data-productid="19" data-producttype="boeuf">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
            <div class="prodSectionList__product">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
            <div class="prodSectionList__product">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
            <div class="prodSectionList__product">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
            <div class="prodSectionList__product">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
            <div class="prodSectionList__product">
                <div class="prodSectionList__product__contain">
                    <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="image du produit">
                    <p id="prodtitle">Andouillette</p>
                    <p>25€</p>
                    <a href="" class="primaryButton" id="whiteButton">Ajouter au panier</a>
                </div>
            </div>
        </div>
    </section>
    <div id="detailedProductContainer"></div> <!-- Ne supprime surtout pas -->
</main>