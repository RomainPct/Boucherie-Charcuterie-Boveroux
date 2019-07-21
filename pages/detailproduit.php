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
<div class="containerDetailedProducts" data-id="<?php echo $productId ?>" data-type="<?php echo $productType ?>">
    <div class="containerDetailedProducts__informationsDetailed">
        <div class="containerDetailedProducts__informationsDetailed__imageDetailed">
            <img src="<?php $c->image("image_du_produit",[900,600]) ?>" alt="<?php $c->text("nom_du_produit")?> - Élevage Boveroux"> 
        </div>
        <div class="containerDetailedProducts__informationsDetailed__textDetailed">
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__descriptionDetailed">
                <h2><?php echo str_replace("_"," ",$productType) ?></h2>
                <h3><?php $c->text("nom_du_produit")?></h3>
                <p><?php $c->text("description_du_produit",false) ?></p>
        </div>
        </div>
        <img class="closeDetailedProduct" src="../assets/images/icones/cross.svg" alt="croix"> 
        <div class="containerDetailedProducts__informationsDetailed__buttonDetailed">
                <a title="Ajouter mon produit au panier" class="primaryButton buttonAddToBasket" href="#">Ajouter au panier</a>
              <!-- <a title="bouton ajouter panier" class="primaryButton" href="#">Test</a> --> 
        </div>
    </div>
</div>