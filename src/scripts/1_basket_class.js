class Basket {
    constructor(){
        //Récuperer le panier depuis local storage
        this.basket = []

        this.getBasketFromLocalStorage()
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
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    removeAProduct(id){
        // Diminuer la quantité du produit dans le panier 
        if (this.basket[id]!= null){
            this.basket[id][2] -= 1
        } 
        // Si nouvelle quantité = 0 -> supprimer du panier
        if(this.basket[id][2]== 0){
            delete this.basket[id]
        } 
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
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
                console.log(totalAmount)
            }
        }
        return totalAmount
    }
}

const basket = new Basket()
basket.addNewProduct(12,'boeuf',1000)
basket.addNewProduct(12,'boeuf',1000)
basket.getBasketTotalAmount()