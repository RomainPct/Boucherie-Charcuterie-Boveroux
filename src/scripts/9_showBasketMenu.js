let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let normalScreenMenu = document.querySelector(".normalScreen")

myBasket.addEventListener('click', (e) =>{
    e.preventDefault()
    if(basketEmpty.classList.contains("hideContentBasket")){ 
        basketEmpty.classList.remove("hideContentBasket")
        normalScreenMenu.classList.add("darkScreenMenu")
    } else{ 
        basketEmpty.classList.add("hideContentBasket")
        normalScreenMenu.classList.remove("darkScreenMenu")
    }
})
