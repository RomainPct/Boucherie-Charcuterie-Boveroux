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
            <img src="../assets/images/photos/viande_boeuf_boveroux.jpg" alt="photo de boeuf"> 
        </div>
        <div class="containerDetailedProducts__informationsDetailed__textDetailed">
            <img src="../assets/images/icones/cross.svg" alt="croix"> 
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__descriptionDetailed">
                <h3>Andouillettes</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla aperiam perspiciatis aliquid omnis esse, eius quibusdam sapiente recusandae totam sunt iusto ea numquam ipsam maxime, laborum exercitationem sit reiciendis!</p>
            </div>
            <div class="containerDetailedProducts__informationsDetailed__textDetailed__buttonDetailed">
                <a title="bouton ajouter panier" class="primaryButton" href="#">Ajouter au panier</a>
            </div>
        </div>
    </div>
</div>