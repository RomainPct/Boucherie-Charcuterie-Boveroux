basket.cleanBasket()
basket.addNewProduct("0_boeuf","Steack",29)
basket.addNewProduct("2_porc","Côte de porc",19)
basket.addNewProduct("2_porc","Côte de porc",19)
basket.addNewProduct("0_plats_cuisines","Ratatouille",7)
// Ne pas toucher avant

const totalCostLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__lineTotalCost')
const summaryBox = document.querySelector('.finishOrder__container__right__form__summary__summaryBox')

function createLine(){
    const productLine = document.createElement('div')
    productLine.classList.add('finishOrder__container__right__form__summary__summaryBox__line')

    const productName = document.createElement('div')
    productName.classList.add('finishOrder__container__right__form__summary__summaryBox__line__product')

    const spec = document.createElement('div')
    spec.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec')

    const price = document.createElement('div')
    price.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__price')

    const minus = document.createElement('a')
    minus.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__munis')
    minus.classList.add('primaryButton')
    minus.setAttribute('href', '#')
    minus.setAttribute('title', 'moins')

    const minusSymbole = document.createTextNode('-')

    const quantity = document.createElement('div')
    quantity.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__quantity')

    const more = document.createElement('a')
    more.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__more')
    more.classList.add('primaryButton')
    more.setAttribute('href', '#')
    more.setAttribute('title', 'plus')

    const plusSymbole = document.createTextNode('+')
    
    let nom = document.createTextNode('nom')
    let quantite = document.createTextNode('2')
    let prix = document.createTextNode('prix')

    price.appendChild(prix)
    quantity.appendChild(quantite)
    productName.appendChild(nom)
    minus.appendChild(minusSymbole)
    more.appendChild(plusSymbole)

    summaryBox.insertBefore(productLine, totalCostLine)
    productLine.appendChild(productName)
    productLine.appendChild(spec)
    spec.appendChild(price)
    spec.appendChild(minus)
    spec.appendChild(quantity)
    spec.appendChild(more)
}

createLine()
createLine()
createLine()

// Vérifier que summaryBox n'est pas null (le js se charge sur toutes les pages donc faut pas lancer la fonction si on est pas sur la bonne page)
    // Parcourir tout les produits du panier ( basket.getProductList() retourne un tableau des produits)
        // Pour chaque produit lancer createLine()

if(summaryBox != null){
    basket.getProductList()
    console.log(basket.getProductList())

    for(let i = 0; i < basket.getProductList.length; i++){
        console.log("ok")
    }

    basket.getProductList().forEach(createLine)

}