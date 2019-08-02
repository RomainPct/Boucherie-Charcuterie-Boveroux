const totalCostLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__lineTotalCost')
const summaryBox = document.querySelector('.finishOrder__container__right__form__summary__summaryBox')

function createLine(id,produit){
    console.log(produit)

    const productLine = document.createElement('div')
    productLine.classList.add('finishOrder__container__right__form__summary__summaryBox__line')
    productLine.setAttribute('data-productid',id)
    productLine.setAttribute('data-productname',produit[0])
    productLine.setAttribute('data-productprice',produit[1])
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
    postTotalPrice.innerHTML = basket.getTotalPrice()
}

function setSummaryPlusButton(button,line){
    button.addEventListener( "click", function(e){
            e.preventDefault()
            // Récupérer l'id, le nom et le prix du produit
            let id = line.getAttribute('data-productid')
            let name = line.getAttribute('data-productname')
            let price = line.getAttribute('data-productprice')
            // l'ajouter dans le panier -> basket.addNewProduct(id,name,price)
            basket.addNewProduct(id,name,price)
            // Mettre à jour la quantité du produit en question
            updateProductOnSummary(line,basket.getProduct(id))
            // Update le prix total -> updateTotalPriceSummary()
            updateTotalPriceSummary()
        }
    )
}

function setSummaryMinusButton(button,line){
    button.addEventListener("click", function(e){
            e.preventDefault()
            let id = line.getAttribute('data-productid')
            let produit = basket.getProduct(id)
            // Si sa nouvelle quantité actuelle -1 est égale à 0
            if((produit[2] - 1) == 0){
                if(confirm('Voulez-vous supprimer ce produit de votre panier ?')){
                    reallyReduceProductAmount(line,produit)
                }
            } else {
                reallyReduceProductAmount(line,produit)
            }
        }
    )
}

function reallyReduceProductAmount(line,product){
    // Récupérer l'id du produit
    let id = line.getAttribute('data-productid')
    // Diminuer sa quantité dans le panier -> basket.removeAProduct(id)
    basket.removeAProduct(id)
    updateProductOnSummary(line,product)
    // Si nouvelle quantité == 0
    if(product[2] == 0){
        // Supprimer la ligne visuellement
        line.remove()
    } else {
        updateProductOnSummary(line,product)
    }
    // Update le prix total -> updateTotalPriceSummary()
    updateTotalPriceSummary()
}

function updateProductOnSummary(line,product){
    if (line != null) {
        let amountDiv = line.querySelector('.finishOrder__container__right__form__summary__summaryBox__line__spec__quantity')
        amountDiv.innerText = product[2]
    }
}

// Vérifier que summaryBox n'est pas null (le js se charge sur toutes les pages donc faut pas lancer la fonction si on est pas sur la bonne page)
    // Parcourir tout les produits du panier ( basket.getProductList() retourne un tableau des produits)
        // Pour chaque produit lancer createLine()
function setConfirmOrderPage(){
    if(summaryBox != null){
        let products = basket.getProductList()
        for(let i in products){
            createLine(i,products[i])
        }
    }
}
setConfirmOrderPage()