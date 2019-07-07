class Basket {
    constructor(){
        /*Récuperer le panier depuis local storage*/
        this.basket = []

        this.getBasketFromLocalStorage()
        this.saveBasketOnLocalStorage()
        this.cleanBasket()
        this.addNewProduct(id,name,price)
        this.removeAProduct(list)
        this.getTotalPrice()
    }

    saveBasketOnLocalStorage(){
        /* Enregistrer this.basket dans le local storage */
         localStorage.setItem('basketContents', JSON.stringify(this.basket))
    }

    getBasketFromLocalStorage(){
        /* Intialiser une variable this.basket avec la data du local storage */
         this.basket = JSON.parse(localStorage.getItem('basketContents')) || []
    }

    cleanBasket(){
        /* Vider le panier et vider en localstorage */
        this.basket [id] = null
    }

    addNewProduct(id,name,price){
        //Ajouter un produit au panier
        this.basket[id] = [name, price, 1]
        // Si deja dans le panier -> augmenter la quantité de 1
        if (this.basket[id] != null){
            this.basket [id][2] += 1
        } else{
            this.basket[id] = [name, price, 1] 
        }
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    removeAProduct(list){
        // Diminuer la quantité du produit dans le panier
        if (this.basket[id]!= null){
            this.basket [id][2] -= 1
        } 
        // Si nouvelle quantité = 0 -> supprimer du panier
        if(this.basket[id][2]== 0){
            this.basket[id] = null
        }
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    getTotalPrice(){
        // Retourne le prix total de la commande 
        let totalPrice = 0
        for (let i in basket){
            totalPrice += ((basket[i][1])*(basket[i][2]));
        }
        return totalPrice
    }

}

const basket = new Basket()