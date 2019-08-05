let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let normalScreenMenu = document.querySelector(".normalScreen")
//let darkScreen = document.querySelector(".normalScreen.darkScreenMenu")

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

/*
window.onload = function(){
    document.onclick = function(e){
      if(e.target.classList == 'normalScreen'){
        basketEmpty.classList.add("hideContentBasket")
      }
    }
} */

/*
normalScreenMenu.addEventListener('click', () =>{
    if(normalScreenMenu.classList.contains("darkScreenMenu")){
        basketEmpty.classList.add("hideContentBasket")
    }
}) */