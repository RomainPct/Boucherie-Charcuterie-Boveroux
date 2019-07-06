class Basket {

    /* Structure de this.basket

    [
        id : [nom,prix,quantité],
        id : [nom,prix,quantité],
        id : [nom,prix,quantité]
    ]

    */

    constructor(){
        // Récuperer le panier depuis local storage
    }

    saveBasketOnLocalStorage(){
        // enregistrer this.basket dans le local storage
    }

    getBasketFromLocalStorage(){
        // intialiser une variable this.basket avec la data du local storage
    }

    cleanBasket(){
        // Vider le panier et vider en localstorage
    }

    addNewProduct(id,name,price){
        // Ajouter un produit au panier
        // Si deja dans le panier -> augmenter la quantité de 1
        // Enregsitrer en localsorage le nouveau panier
    }

    removeAProduct(id){
        // Diminuer la quantité du produit dans le panier
        // Si nouvelle quantité = 0 -> supprimer du panier
        // Enregsitrer en localsorage le nouveau panier
    }

    getTotalPrice(){
        // Retourne le prix total de la commande
    }

}

const basket = Basket()