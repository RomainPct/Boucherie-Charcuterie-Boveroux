class Basket {
    constructor(){
        //Récuperer le panier depuis local storage
        this.basket = []

        this.getBasketFromLocalStorage()
        this.saveBasketOnLocalStorage()
        this.cleanBasket()
        this.addNewProduct(25,'andouillette',50)
        this.addNewProduct(15,'viande',200)
       // console.log(this.basket[25])
       // console.log(this.basket[15])
        this.removeAProduct(25)
      // console.log(this.basket[25])
        this.getTotalPrice()
      // console.log(this.basket[15])
    }

    saveBasketOnLocalStorage(){
        // Enregistrer this.basket dans le local storage 
         localStorage.setItem('basketContents', JSON.stringify(this.basket))
         console.log(this.basket)
    }

    getBasketFromLocalStorage(){
        // Intialiser une variable this.basket avec la data du local storage
         this.basket = JSON.parse(localStorage.getItem('basketContents')) || []
         console.log(this.basket)
    }

    cleanBasket(){
        // Vider le panier et vider en localstorage
        this.basket = []
        localStorage.removeItem('basketContents')
    }

    addNewProduct(id,name,price){
        console.log("nouveau produit" +" "+ this.basket[id])
        //Ajouter un produit au panier
        // Si deja dans le panier -> augmenter la quantité de 1
        if (this.basket[id] != null){
            this.basket[id][2] += 1
            console.log("this.basket[id] != null" + this.basket[id][2])
        } else{
            this.basket[id] = [name, price, 1]
            console.log("else :" + this.basket[id])
        }
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    removeAProduct(id){
        console.log("supp un produit" +" "+ this.basket[id])
        // Diminuer la quantité du produit dans le panier
        if (this.basket[id]!= null){
            this.basket[id][2] -= 1
            console.log("this.basket[id]!= null:" + this.basket[id][2])
        } 
        // Si nouvelle quantité = 0 -> supprimer du panier
        console.log("avant second if" +" "+ this.basket[id])
        if(this.basket[id][2]== 0){
            delete this.basket[id]
            console.log("this.basket[id][2]== 0 :" + this.basket[id])
        }
        // Enregistrer en localsorage le nouveau panier
        this.saveBasketOnLocalStorage()
    }

    getTotalPrice(){
        // Retourne le prix total de la commande 
        let totalPrice = 0
        for (let i in this.basket){
            totalPrice += ((this.basket[i][1])*(this.basket[i][2]));
            // les valeurs prix et quantité pas reconnues car pas tableau id ?? trisfristefte
            console.log("résultat du prix total :" + totalPrice)
        }
        return totalPrice
    }

}

const basket = new Basket()
console.log(basket.addNewProduct(25))
console.log(basket.removeAProduct(25))
console.log(basket.getTotalPrice()) 