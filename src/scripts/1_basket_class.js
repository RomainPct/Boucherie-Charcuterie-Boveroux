class Basket {
    constructor(){
        //Récuperer le panier depuis local storage
        this.basket = []
        this.getBasketFromLocalStorage()
        this.setFinishOrderButton()
        this.view = new BasketView(this.getProductList(),this.getBasketTotalAmount())
        this.updateBasketContentInput()
    }
    
    saveBasketOnLocalStorage(){
        // Enregistrer this.basket dans le local storage 
         localStorage.setItem('basketContents', JSON.stringify(this.basket))
    }

    getBasketFromLocalStorage(){
        // Intialiser une variable this.basket avec la data du local storage
         this.basket = JSON.parse(localStorage.getItem('basketContents')) || []
    }

    cleanBasket(){
        // Vider le panier et vider en localstorage
        this.basket = []
        localStorage.removeItem('basketContents')
        this.view.updateBasket(0)
    }

    addNewProduct(id,name,price){
        //Ajouter un produit au panier
        // Si deja dans le panier -> augmenter la quantité de 1
        if (this.basket[id] != null){
            this.basket[id][2] += 50
        } else {
            this.basket[id] = [name, price, 150]
        }
        this.endProductEdition(id)
    }

    removeAProduct(id){
        // Diminuer la quantité du produit dans le panier 
        if (this.basket[id]!= null){
            this.basket[id][2] -= 50
            // Si nouvelle quantité = 0 -> supprimer du panier
            if(this.basket[id][2] < 150){
                delete this.basket[id]
            }
        }
        this.endProductEdition(id)
    }

    endProductEdition(id){
        this.saveBasketOnLocalStorage()
        this.setFinishOrderButton()
        this.updateProductAmountIcon()
        this.updateBasketContentInput()
        this.view.updateProduct(null,id,this.getProduct(id))
    }

    updateProductAmountIcon(){
        // Update l'icone du nombre de produits en changeant le chiffre ou en la cachant
        let notif = document.querySelector('.headerContainer__inside__cat__underButton__notif')
        if(basket.getBasketTotalAmount() != 0){
            notif.style.display = "block"
            notif.innerHTML = basket.getBasketTotalAmount()
        }else{
            notif.style.display = "none"
        }
    }

    getTotalPrice(){
        // Retourne le prix total de la commande 
        let totalPrice = 0
        for (let i in this.basket){
            if (this.basket[i]!= null){ 
                totalPrice += (parseFloat(this.basket[i][1].replace(',','.')) * (this.basket[i][2]) / 1000);
            }
        }
        return Math.ceil(totalPrice * 100) / 100
    }

    getBasketTotalAmount(){
        let totalAmount = 0
        for (let i in this.basket){
            if (this.basket[i]!= null){ 
                totalAmount ++
            }
        }
        return totalAmount
    }

    getProductList(){
        return this.basket // Retourne un tableau des éléments du panier
    }

    getProduct(id){
        return this.basket[id]
    }

    setFinishOrderButton(){
        let button = document.querySelector('#js_validateOrderOurProducts')
        if (button != null) {
            button.style.visibility = (this.getBasketTotalAmount() > 0) ? "visible" : "hidden"
        }
    }

    updateBasketContentInput(){
        let input = document.querySelector('#basketContentInput')
        if (input != null){
            input.value = JSON.stringify(this.basket)
        }
    }

}

class BasketView {
    constructor(products,productAmount){
        this.view = document.querySelector('#js_basket')
        this.content = this.view.querySelector('#js_basketContent')
        this.updateBasket(productAmount)
        for(let i in products) {
            this.addNewLine(i,products[i])
        }
    }

    updateBasket(productAmount) {
        if (productAmount > 0) {
            this.view.classList.remove('basketIsEmpty')
        } else {
            this.view.classList.add('basketIsEmpty')
        }
    }

    updateProduct(line,id,product){
        this.updateBasket(basket.getBasketTotalAmount())
        if (line == null){
            line = this.content.querySelector('#basketLine_'+id)
        } else {
            updateProductOnOurProducts(id,product)
            let summaryLine = document.querySelector('.finishOrder__container__right__form__summary__summaryBox__line[data-productid="'+id+'"]')
            updateProductOnSummary(summaryLine,product)
        }
        if (line == null) {
            this.addNewLine(id,product)
        } else {
            (product == null) ? line.remove() : line.querySelector('.js_amount').innerHTML = `${product[2]}g`
        }
    }

    addNewLine(id,produit){
        const productLine = document.createElement('div')
        productLine.classList.add('headerContainer__inside__cat__menuBasketEmpty__menuBasketContents__productsInfo__priceDetailed')
        productLine.setAttribute('id','basketLine_'+id)
        productLine.setAttribute('data-productid',id)
        productLine.setAttribute('data-productname',produit[0])
        productLine.setAttribute('data-productprice',produit[1])
        this.content.appendChild(productLine)
    
        const productName = document.createElement('p')
        productName.classList.add('nameProduct')
        productName.innerHTML = produit[0]
        productLine.appendChild(productName)
    
        const price = document.createElement('p')
        price.classList.add('priceOfProduct')
        price.innerHTML = produit[1] + "€/kg"
        productLine.appendChild(price)

        const spec = document.createElement('div')
        spec.classList.add('headerContainer__inside__cat__menuBasketEmpty__menuBasketContents__productsInfo__priceDetailed__quantityProducts')
        productLine.appendChild(spec)
    
        const minus = document.createElement('a')
        minus.classList.add('primaryButton')
        minus.setAttribute('title', 'Réduire la quantité')
        minus.innerHTML = "-"
        spec.appendChild(minus)
    
        const quantity = document.createElement('p')
        quantity.classList.add('js_amount')
        quantity.innerHTML = `${produit[2]}g`
        spec.appendChild(quantity)
    
        const more = document.createElement('a')
        more.classList.add('primaryButton')
        more.setAttribute('title', 'Augmenter la quantité')
        more.innerHTML = "+"
        spec.appendChild(more)
    
        this.setPlusButton(more,productLine)
        this.setMinusButton(minus,productLine)
    }

    setPlusButton(button,line){
        button.addEventListener( "click", function(e){
            e.preventDefault()
            let id = line.getAttribute('data-productid')
            let name = line.getAttribute('data-productname')
            let price = line.getAttribute('data-productprice')
            basket.addNewProduct(id,name,price)
            basket.view.updateProduct(line,id,basket.getProduct(id))
        })
    }
    
    setMinusButton(button,line){
        button.addEventListener("click", function(e){
            e.preventDefault()
            let id = line.getAttribute('data-productid')
            let produit = basket.getProduct(id)
            // Si sa nouvelle quantité actuelle -1 est égale à 0
            if((produit[2] - 50) < 150){
                if(confirm('Voulez-vous supprimer ce produit de votre panier ?')){
                    basket.view.reallyReduceProductAmount(line,produit)
                    basket.view.updateBasket(basket.getBasketTotalAmount())
                    updateProductOnOurProducts(id,null)
                }
            } else {
                basket.view.reallyReduceProductAmount(line,produit)
            }
        })
    }

    reallyReduceProductAmount(line,produit){
        let id = line.getAttribute('data-productid')
        basket.removeAProduct(id)
        basket.view.updateProduct(line,id,produit)
    }

}

const basket = new Basket()
basket.updateProductAmountIcon()

if (typeof isSend != "undefined" && isSend == "yes"){
    basket.cleanBasket()
}