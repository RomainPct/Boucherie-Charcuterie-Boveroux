let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__underButton__menuBasketEmpty")
let basketContents = document.querySelector(".headerContainer__inside__cat__underButton__menuBasketContents")
let showBasket = 1

myBasket.addEventListener('click', () =>{
    if(showBasket == 1){ 
        basketEmpty.classList.remove("basketInvisible")
        showBasket = 0
    } else{
        showBasket = 1
    }
})
console.log(myBasket)
console.log(basketEmpty)