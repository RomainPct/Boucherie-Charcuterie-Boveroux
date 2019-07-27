basket.cleanBasket()
basket.addNewProduct("0_boeuf","Steack",29)
basket.addNewProduct("0_charcuterie","saucisson",19)
basket.addNewProduct("1_charcuterie","cochon",19)
basket.addNewProduct("1_charcuterie","cochon",19)
basket.addNewProduct("0_plats_cuisines","Ratatouille",7)
// Ne pas toucher avant


// C'est good, hésite pas à regarder 7_produits.js et le html de la page produits pour t'inspirer ou te débloquer ;)
const totalCostLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__lineTotalCost')
const summaryBox = document.querySelector('.finishOrder__container__right__form__summary__summaryBox')

function createLine(produit){
    console.log(produit)

    const productLine = document.createElement('div')
    productLine.classList.add('finishOrder__container__right__form__summary__summaryBox__line')
    summaryBox.insertBefore(productLine, totalCostLine)

    const productName = document.createElement('div')
    productName.classList.add('finishOrder__container__right__form__summary__summaryBox__line__product')
    productName.innerHTML = produit[0]
    productLine.appendChild(productName)

    const spec = document.createElement('div')
    spec.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec')
    productLine.appendChild(spec)

    const priceEuros = document.createElement('div')
    priceEuros.innerHTML = produit[1]
    spec.appendChild(priceEuros)

    const priceEurosSymbole = document.createElement('div')
    priceEurosSymbole.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__price')
    priceEurosSymbole.innerHTML = '€'
    spec.appendChild(priceEurosSymbole)

    const minus = document.createElement('a')
    minus.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__munis')
    minus.classList.add('primaryButton')
    minus.setAttribute('href', '#')
    minus.setAttribute('title', 'moins')
    minus.innerHTML = "-"
    spec.appendChild(minus)

    const quantity = document.createElement('div')
    quantity.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__quantity')
    quantity.innerHTML = produit[2]
    spec.appendChild(quantity)

    const more = document.createElement('a')
    more.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__more')
    more.classList.add('primaryButton')
    more.setAttribute('href', '#')
    more.setAttribute('title', 'plus')
    more.innerHTML = "+"
    spec.appendChild(more)

    // Gestion de l'ajout des actions des boutons
    setSummaryPlusButton(more,productLine)
    setSummaryMinusButton(minus,productLine)
    updateTotalPriceSummary()
}

function updateTotalPriceSummary(){
    // Sélectionner le span en question
    let postTotalPrice = document.querySelector('#postTotalPrice')
    // Mettre getBasketTotalAmount() dans le span
    postTotalPrice.appendChild(getBasketTotalAmount())
}

function setSummaryPlusButton(button,line){
    const more = button.querySelector('.finishOrder__container__right__form__summary__summaryBox__line__spec__more')
    // Ajouter le event listener sur le bouton
    more.addEventListener(
        // On click
        "click",
        function(){
            // Récupérer l'id, le nom et le prix du produit
            let id = line.getAttribute('data-productid')
            let name = line.getAttribute('data-productname')
            let price = line.getAttribute('data-productprice')

            // l'ajouter dans le panier -> basket.addNewProduct(id,name,price)
            basket.addNewProduct(id,name,price)

            // Mettre à jour la quantité du produit en question
            updateProduct(id,basket.getProduct(id))

            // Update le prix total -> updateTotalPriceSummary()
            updateTotalPriceSummary()
        }
    )
}

function setSummaryMinusButton(button,line){
    const minus = button.querySelector('.finishOrder__container__right__form__summary__summaryBox__line__spec__minus')
    // Ajouter le event listener sur le bouton
    minus.addEventListener(
        // On click
        "click",
        function(){
            let id = line.getAttribute('data-productid')
            // Si sa nouvelle quantité actuelle -1 est égale à 0
            if(basket[id]-1 == 0){
                // Demander confirmation de suppression
                if(confirm('Voulez-vous supprimer ce porduit de votre panier ?')){
                    // Si oui -> appeler fonction reallyReduceProductAmount(button,line)
                    reallyReduceProductAmount(button,line)
                }
            }
            // Sinon
            else{
                // Appeler fonction reallyReduceProductAmount(button,line)
                reallyReduceProductAmount(button,line)
            }
        }
    )
}

function reallyReduceProductAmount(button,line){
    // Récupérer l'id du produit
    let id = line.getAttribute('data-productid')

    // Diminuer sa quantité dans le panier -> basket.removeAProduct(id)
    basket.removeAProduct(id)

    // Si nouvelle quantité == 0
    if(basket[id] == 0){
        // Supprimer la ligne
        reallyReduceProductAmount(button,line)
    }
    // Sinon
    else{
        // Mettre à jour la quantité
        updateProduct(id,basket.getProduct(id))
    }

    // Update le prix total -> updateTotalPriceSummary()
    updateTotalPriceSummary()
}

// Vérifier que summaryBox n'est pas null (le js se charge sur toutes les pages donc faut pas lancer la fonction si on est pas sur la bonne page)
    // Parcourir tout les produits du panier ( basket.getProductList() retourne un tableau des produits)
        // Pour chaque produit lancer createLine()
function setConfirmOrderPage(){
    if(summaryBox != null){
        let tab = basket.getProductList()
        console.log(basket.getProductList())
        for(let i in tab){
            if(tab[i] != null){
                createLine(tab[i])
                console.log('line create')
            }
        }
    }
}
setConfirmOrderPage()