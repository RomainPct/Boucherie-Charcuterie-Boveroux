function detailedProductOpened(){ // Appelé automatiquement à l'ouverture d'un produit
    // Appeler les fonctions à lancer lors de l'affichage d'un prdouit détaillé ici
    const card = document.querySelector('#detailedProduct')
    if (card != null) {
        updateDetailedProductPage(card)
        setButtonsOnDetailedProductPage(card)
    }
}

function updateDetailedProductPage(card){
    let id = card.getAttribute('data-id'),
        product = basket.getProduct(id)
    if (product == null){
        // Le produit n'est pas dans le panier donc ->
        // Afficher le bouton ajouter au panier
    } else {
        // Afficher le bouton +/i
        // Mettre à jour la quantité sur le bouton +/-
    }
}

function setButtonsOnDetailedProductPage(card){
    setAddToBasketButtonOnDetailedProductPage(card)
    setMinusButtonOnDetailedProductPage(card)
    setPlusButtonOnDetailedProductPage(card)
}

function addDetailedProductToBasketFromCard(card){
    // recuperer l'id via get-attribute sur la card
    // recuperer le nom du produit via get-attribute sur la card
    // recuperer le prix du produit via get-attribute sur la card
    // ajouter au panier
    // update la quantité (en appelant la fonction qui existe pour ça)
}

function setAddToBasketButtonOnDetailedProductPage(card){
    const addToBasketButton = card.querySelector('.js_addToBasket')
    if (addToBasketButton != null) {
        // Ajouter un event listener
            // Appeler addProductToBasketFromCard(card)
    }
}

function setMinusButtonOnDetailedProductPage(card){
    const minusButton = card.querySelector('.js_minusButton')
    if (minusButton != null) {
        // Ajouter un event listener
            // recuperer l'id via get-attribute sur la card
            // diminuer la quantité
            // update la quantité (en appelant la fonction qui existe pour ça)
    }
}

function setPlusButtonOnDetailedProductPage(card){
    const plusButton = card.querySelector('.js_plusButton')
    if (plusButton != null) {
        // Ajouter un event listener
            // Appeler addProductToBasketFromCard(card)
    }
}