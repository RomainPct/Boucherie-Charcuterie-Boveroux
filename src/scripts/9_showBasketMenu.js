let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let basketContents = document.querySelector(".headerContainer__inside__cat__menuBasketContents")

myBasket.addEventListener('click', (e) =>{
    e.preventDefault()
    if(basketEmpty.classList.contains("hideContentBasket")){ 
        basketEmpty.classList.remove("hideContentBasket")
    } else{
        basketEmpty.classList.add("hideContentBasket")
    }
})