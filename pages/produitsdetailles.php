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
    <div class="containerDetailedProducts__informations">
        <div class="containerDetailedProducts__informations__image">
            <!-- Mettre image correspondante-->
        </div>
        <div class="containerDetailedProducts__informations__text">
            <!-- Description du produit et bouton "Ajouter au panier"-->
        </div>
    </div>
</div>