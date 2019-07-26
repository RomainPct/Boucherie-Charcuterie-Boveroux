function setProductsPage(){
    if ( document.querySelector('.prodSection') != null ){
        peuplageProductsPage()
        setButtonsOnProductsPage()
    }
}

function peuplageProductsPage(){
    let products = basket.getProductList()
    for (let i in products) {
        updateProduct(i,products[i])
    }
}

function updateProduct(id,product){
    card = document.querySelector('#card_'+id)
    console.log("UPDATE PRODUCT : " + id + " ===> "+ product)
    if (card != null) {
        if (product == null){
            // Afficher le bouton ajouter au panier
        } else {
            const amount = card.querySelector(".js_ProductAmount")
            // Afficher le bouton +/-
            if (amount != null) {
                amount.innerHTML = product[2]
            }
        }
    }
}

function setButtonsOnProductsPage(){
    document.querySelectorAll(".prodSectionList__product ").forEach(card => {
        setAddToBasketButtonsOnProductsPage(card)
        setMinusButtonsOnProductsPage(card)
        setPlusButtonsOnProductsPage(card)
    })
}

function addProductToBasketFromCard(card){
    let id = card.getAttribute('data-productid'),
        name = card.getAttribute('data-productname'),
        price = card.getAttribute('data-productprice')
    basket.addNewProduct(id,name,price)
    updateProduct(id,basket.getProduct(id))
}

function setAddToBasketButtonsOnProductsPage(card){
    const addToBasketButton = card.querySelector('.js_addToBasket')
    if (addToBasketButton != null) {
        addToBasketButton.addEventListener('click',function(e){
            e.preventDefault()
            e.stopPropagation()
            addProductToBasketFromCard(card)
        })
    }
}

function setMinusButtonsOnProductsPage(card){
    const minusButton = card.querySelector('.js_minusButton')
    if (minusButton != null) {
        minusButton.addEventListener('click',function(e){
            e.preventDefault()
            e.stopPropagation()
            let id = card.getAttribute('data-productid')
            basket.removeAProduct(id)
            updateProduct(id,basket.getProduct(id))
        })
    }
}

function setPlusButtonsOnProductsPage(card){
    const plusButton = card.querySelector('.js_plusButton')
    if (plusButton != null) {
        plusButton.addEventListener('click',function(e){
            e.preventDefault()
            e.stopPropagation()
            addProductToBasketFromCard(card)
        })
    }
}

setProductsPage()

var cat = document.querySelectorAll('.catlist')
var tertBtn = document.querySelector('a.tertiaryButton')
var secBtn = document.querySelector('a.secondaryButton')



cat.forEach(function (catlist) {
    catlist.addEventListener("click",
        function(e){
                tertBtn.classList.replace('tertiaryButton', 'secondaryButton')
        }
    )
})
