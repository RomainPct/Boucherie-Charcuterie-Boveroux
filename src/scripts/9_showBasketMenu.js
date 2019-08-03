let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let basketContents = document.querySelector(".headerContainer__inside__cat__menuBasketContents")
let body = document.querySelector("body")

myBasket.addEventListener('click', (e) =>{
    e.preventDefault()
    if(basketEmpty.classList.contains("hideContentBasket")){ 
        basketEmpty.classList.remove("hideContentBasket")
        body.classList.add("screenDarkMenu")
        console.log(body)
    } else{
        basketEmpty.classList.add("hideContentBasket")
        body.classList.remove("screenDarkMenu")
        console.log(body)
    }
})