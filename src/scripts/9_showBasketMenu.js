let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let basketContents = document.querySelector(".headerContainer__inside__cat__menuBasketContents")

myBasket.addEventListener('click', () =>{
    if(basketEmpty.classList.contains("basketIsEmpty")){ 
        basketEmpty.classList.remove("basketIsEmpty")
    } else{
        basketEmpty.classList.add("basketIsEmpty")
    }
})