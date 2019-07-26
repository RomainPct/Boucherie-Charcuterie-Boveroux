<!--
    Pour tester candideCollectimItem en changeant le nom de la collection et l'id
    localhost:8888/detailproduit?id=0&type=boeuf
-->
<?php
include_once "../Candide.php";
$productId = $_GET["id"];
$productType = $_GET["type"];
$c = new CandideCollectionItem ($productType,$productId);
?>
<div
    class="containerDetailedProducts" id="detailedProduct"
    data-id="<?php echo $productId ?>_<?php echo $productType ?>"
    data-productname="<?php $c->text('nom_du_produit') ?>"
    data-productprice="<?php $c->text('prix') ?>"
    >
    <div class="containerDetailedProducts__informationsDetailed">
        <div class="containerDetailedProducts__informationsDetailed__imageDetailed">
            <img src="<?php $c->image("image_du_produit",[900,600]) ?>" alt="<?php $c->text("nom_du_produit")?> - Élevage Boveroux"> 
        </div>
        <div class="containerDetailedProducts__informationsDetailed__textDetailed">
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__descriptionDetailed">
                <h2><?php echo str_replace("_"," ",$productType) ?></h2>
                <div class= "containerDetailedProducts__informationsDetailed__textDetailed__descriptionDetailed__priceProduct">
                    <h3><?php $c->text("nom_du_produit")?></h3>
                    <h4>25€</h4>
                </div>
                <p><?php $c->text("description_du_produit",false) ?></p>
            </div>
        </div>
        <img class="closeDetailedProduct" src="../assets/images/icones/cross.svg" alt="croix"> 
        <div class="containerDetailedProducts__informationsDetailed__buttonDetailed productInBasket">
            <a href="#" title="Ajouter mon produit au panier" class="primaryButton buttonAddToBasket js_addToBasket">Ajouter au panier</a>
            <div class="addBasket">
                <a href="#" class="js_minusButton" title="Diminuer le nombre de produits">-</a>
                <p class="js_ProductAmount" title="Nombre de produits">2</p>
                <a href="#" class="js_plusButton" title="Augmenter le nombre de produits">+</a>
            </div>
        </div>
    </div>
</div>