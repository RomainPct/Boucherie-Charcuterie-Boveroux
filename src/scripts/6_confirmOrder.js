basket.cleanBasket()
basket.addNewProduct("0_boeuf","Steack",29)
basket.addNewProduct("0_charcuterie","saucisson",19)
basket.addNewProduct("1_charcuterie","cochon",19)
basket.addNewProduct("1_charcuterie","cochon",19)
basket.addNewProduct("0_plats_cuisines","Ratatouille",7)
// Ne pas toucher avant

const totalCostLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__lineTotalCost')
const summaryBox = document.querySelector('.finishOrder__container__right__form__summary__summaryBox')

function createLine(produit){
    console.log(produit)

    const productLine = document.createElement('div')
    productLine.classList.add('finishOrder__container__right__form__summary__summaryBox__line')

    const productName = document.createElement('div')
    productName.classList.add('finishOrder__container__right__form__summary__summaryBox__line__product')
    productName.innerHTML = produit[0]

    const spec = document.createElement('div')
    spec.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec')

    const priceEuros = document.createElement('div')
    priceEuros.innerHTML = produit[1]

    const priceEurosSymbole = document.createElement('div')
    priceEurosSymbole.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__price')
    priceEurosSymbole.innerHTML = '€'

    const minus = document.createElement('a')
    minus.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__munis')
    minus.classList.add('primaryButton')
    minus.setAttribute('href', '#')
    minus.setAttribute('title', 'moins')

    const minusSymbole = document.createTextNode('-')

    const quantity = document.createElement('div')
    quantity.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__quantity')
    quantity.innerHTML = produit[2]

    const more = document.createElement('a')
    more.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__more')
    more.classList.add('primaryButton')
    more.setAttribute('href', '#')
    more.setAttribute('title', 'plus')

    const plusSymbole = document.createTextNode('+')

    summaryBox.insertBefore(productLine, totalCostLine)
    productLine.appendChild(productName)
    productLine.appendChild(spec)
    spec.appendChild(priceEuros)
    spec.appendChild(priceEurosSymbole)
    spec.appendChild(minus)
    minus.appendChild(minusSymbole)
    spec.appendChild(quantity)
    spec.appendChild(more)
    more.appendChild(plusSymbole)
}

// Vérifier que summaryBox n'est pas null (le js se charge sur toutes les pages donc faut pas lancer la fonction si on est pas sur la bonne page)
    // Parcourir tout les produits du panier ( basket.getProductList() retourne un tableau des produits)
        // Pour chaque produit lancer createLine()
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

// Dans updatePrice() utiliser getTotalPrice()
// function updatePrice(){
//     let postTotalPrice = document.querySelector('#postTotalPrice')
//     let tab = basket.getProductList()

//     for(let i in tab){
//         if(tab[i] != null){
//             getBasketTotalAmount(tab[i])
//             console.log(getBasketTotalAmount())
//         }
//     }

//     postTotalPrice.innerHTML = getBasketTotalAmount()
// }
// updatePrice()