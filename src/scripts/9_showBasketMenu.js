let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__underButton__menuBasketEmpty")
let basketContents = document.querySelector(".headerContainer__inside__cat__underButton__menuBasketContents")

myBasket.addEventListener('click', () =>{
    if(basketEmpty.classList.contains("basketInvisible")){ 
        basketEmpty.classList.remove("basketInvisible")
    } else{
        basketEmpty.classList.add("basketInvisible")
    }
})