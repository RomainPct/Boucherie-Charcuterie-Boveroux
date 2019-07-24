basket.cleanBasket()
basket.addNewProduct("0_boeuf","Steack",29)
basket.addNewProduct("2_porc","Côte de porc",19)
basket.addNewProduct("2_porc","Côte de porc",19)
basket.addNewProduct("0_plats_cuisines","Ratatouille",7)
// Ne pas toucher avant

const productLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__line')
const totalCostLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__lineTotalCost')
const summaryBox = document.querySelector('.finishOrder__container__right__form__summary__summaryBox')

// function createLine(){
    const product = document.createElement('div')
    product.classList.add('finishOrder__container__right__form__summary__summaryBox__line__product')

    const spec = document.createElement('div')
    spec.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec')

    const price = document.createElement('div')
    price.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__price')

    const minus = document.createElement('div')
    minus.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__munis')
    minus.classList.add('primaryButton')
    minus.setAttribute('href', '#')
    minus.setAttribute('title', 'moins')

    const quantity = document.createElement('div')
    quantity.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__quantity')

    const more = document.createElement('div')
    more.classList.add('finishOrder__container__right__form__summary__summaryBox__line__spec__more')
    more.classList.add('primaryButton')
    more.setAttribute('href', '#')
    more.setAttribute('title', 'plus')

    let nom = document.createTextNode('nom')
    let quantite = document.createTextNode('quantite')
    let prix = document.createTextNode('prix')

    price.appendChild(prix)
    quantity.appendChild(quantite)
    product.appendChild(nom)

    summaryBox.insertBefore(productLine, totalCostLine)
    productLine.appendChild(product)
    productLine.appendChild(spec)
    spec.appendChild(price)
    spec.appendChild(minus)
    spec.appendChild(quantity)
    spec.appendChild(more)
// }

// createLine()