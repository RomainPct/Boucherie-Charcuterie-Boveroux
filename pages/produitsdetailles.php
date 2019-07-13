<!--
    Pour tester candideCollectimItem en changeant le nom de la collection et l'id
    localhost:8888/produitsdetailles?id=15&type=boeuf
-->
<?php
$productId = $_GET["id"];
$productType = $_GET["type"];
echo $productId. " - ".$productType;
?>
<div class="containerDetailedProducts">
    <div class="containerDetailedProducts__informationsDetailed">
        <div class="containerDetailedProducts__informationsDetailed__imageDetailed">
            <img src="<?php $productId->image("image_du_produit",[]) ?>" alt="photo de boeuf"> 
        </div>
        <div class="containerDetailedProducts__informationsDetailed__textDetailed">
            <img class="closeDetailedProduct" src="../assets/images/icones/cross.svg" alt="croix"> 
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__descriptionDetailed">
                <h2>Veau</h2>
                <h3><?php $productType->text("nom_du_produit")?></h3>
                <p><?php $productId->text("description_du_produit",true) ?></p>
            </div>
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__buttonDetailed">
                <a title="bouton ajouter panier" class="primaryButton" href="#">Ajouter au panier</a>
            </div>
        </div>
    </div>
</div>