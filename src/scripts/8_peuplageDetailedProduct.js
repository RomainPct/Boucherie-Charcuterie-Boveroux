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
        product = basket.getProduct(id),
        showButtonBasket = card.querySelector(".containerDetailedProducts__informationsDetailed__buttonDetailed"),
        amountOfProduct = card.querySelector(".js_ProductAmount")
    if (product == null){
        // Le produit n'est pas dans le panier donc ->
        // Afficher le bouton ajouter au panier
        showButtonBasket.classList.remove("productInBasket")
    } else {
        // Afficher le bouton +/i
        showButtonBasket.classList.add("productInBasket")
        // Mettre à jour la quantité sur le bouton +/-
        if(amountOfProduct != null){
            amountOfProduct.innerHTML = product[2]
        }
    }
    updateProductOnOurProducts(id,product)
}

function setButtonsOnDetailedProductPage(card){
    setAddToBasketButtonOnDetailedProductPage(card)
    setMinusButtonOnDetailedProductPage(card)
    setPlusButtonOnDetailedProductPage(card)
}

function addDetailedProductToBasketFromCard(card){
    // recuperer l'id via get-attribute sur la card
    let productId = card.getAttribute('data-id')
    // recuperer le nom du produit via get-attribute sur la card
    let productName = card.getAttribute('data-productname')
    // recuperer le prix du produit via get-attribute sur la card
    let productPrice = card.getAttribute('data-productprice')
    // ajouter au panier
    basket.addNewProduct(productId, productName, productPrice)
    // update la quantité (en appelant la fonction qui existe pour ça)
    updateDetailedProductPage(card)
}

function setAddToBasketButtonOnDetailedProductPage(card){
    const addToBasketButton = card.querySelector('.js_addToBasket')
    if (addToBasketButton != null) {
        addToBasketButton.addEventListener('click', () =>{
            addDetailedProductToBasketFromCard(card)
        })
    }
}

function setMinusButtonOnDetailedProductPage(card){
    const minusButton = card.querySelector('.js_minusButton')
    if (minusButton != null) {
        // Ajouter un event listener
        minusButton.addEventListener('click', () =>{
            // recuperer l'id via get-attribute sur la card
            let id = card.getAttribute('data-id')
            // diminuer la quantité
            basket.removeAProduct(id)
            // update la quantité (en appelant la fonction qui existe pour ça)
            updateDetailedProductPage(card)
        })
    }
}

function setPlusButtonOnDetailedProductPage(card){
    const plusButton = card.querySelector('.js_plusButton')
    if (plusButton != null) {
        plusButton.addEventListener('click', () => {
            addDetailedProductToBasketFromCard(card)
        })
    }
}