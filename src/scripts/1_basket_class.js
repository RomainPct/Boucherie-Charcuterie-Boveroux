class Basket {
    constructor(){
        //Récuperer le panier depuis local storage
        this.basket = []
        this.getBasketFromLocalStorage()
        this.setFinishOrderButton()
        this.view = new BasketView(this.getProductList(),this.getBasketTotalAmount())
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
    }

    addNewProduct(id,name,price){
        //Ajouter un produit au panier
        // Si deja dans le panier -> augmenter la quantité de 1
        if (this.basket[id] != null){
            this.basket[id][2] += 1
        } else{
            this.basket[id] = [name, price, 1]
        }
        this.endProductEdition()
    }

    removeAProduct(id){
        // Diminuer la quantité du produit dans le panier 
        if (this.basket[id]!= null){
            this.basket[id][2] -= 1
            // Si nouvelle quantité = 0 -> supprimer du panier
            if(this.basket[id][2] == 0){
                delete this.basket[id]
            }
        }
        this.endProductEdition()
    }

    endProductEdition(){
        this.saveBasketOnLocalStorage()
        this.setFinishOrderButton()
        this.updateProductAmountIcon()
    }

    updateProductAmountIcon(){
        // Update l'icone du nombre de produits en changeant le chiffre ou en la cachant
        let notif = document.querySelector('.headerContainer__inside__cat__underButton__notif')

        notif.style.display = "block"

        if(basket.getBasketTotalAmount() != 0){
            notif.innerHTML = basket.getBasketTotalAmount()
        }else{
            notif.style.display = "none"
        }
        console.log(notif)
        console.log(notif.innerHTML)
    }

    getTotalPrice(){
        // Retourne le prix total de la commande 
        let totalPrice = 0
        for (let i in this.basket){
            if (this.basket[i]!= null){ 
                totalPrice += ((this.basket[i][1])*(this.basket[i][2]));
            }
        }
        return totalPrice
    }

    getBasketTotalAmount(){
        let totalAmount = 0
        for (let i in this.basket){
            if (this.basket[i]!= null){ 
                totalAmount += this.basket[i][2]
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
        if (line == null){
            line = this.content.querySelector('#basketLine_'+id)
        } else {
            updateProductOnOurProducts(id,product)
        }
        if (line == null) {
            this.addNewLine(id,product)
        } else {
            (product == null) ? line.remove() : line.querySelector('.js_amount').innerHTML = product[2]
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
        price.innerHTML = produit[1] + "€"
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
        quantity.innerHTML = produit[2]
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
            if((produit[2] - 1) == 0){
                if(confirm('Voulez-vous supprimer ce porduit de votre panier ?')){
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