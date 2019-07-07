class Basket {
    constructor(){
        /*Récuperer le panier depuis local storage*/
        this.basket = []
        this.basket ['list'] = 'name,price,quantity'

        this.saveBasketOnLocalStorage()
        this.getBasketFromLocalStorage()
        this.cleanBasket()
        this.addNewProduct(list,name,price)
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
    }

    addNewProduct(list,name,price){
        /*Ajouter un produit au panier*/
        this.basket[id] +=1
        
        /* Si deja dans le panier -> augmenter la quantité de 1 */
        for (let i in basket){
            if (basket[id]== basket[i]){
                this.basket[this.name] +=1
            }
        }
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    removeAProduct(list){
        // Diminuer la quantité du produit dans le panier
        // Si nouvelle quantité = 0 -> supprimer du panier
       /* for (let i in basket){
        } */
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    getTotalPrice(){
        /* Retourne le prix total de la commande */
        let totalPrice = 0
        for (let i in basket){
            totalPrice += ((basket[i].parseInt(price))*(basket[i].parseInt(quantity)));
        }
        return totalPrice
    }

}

const basket = new Basket()