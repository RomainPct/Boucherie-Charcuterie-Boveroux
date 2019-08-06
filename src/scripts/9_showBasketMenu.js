let myBasket = document.querySelector("a.secondaryButton")
let basketEmpty = document.querySelector(".headerContainer__inside__cat__menuBasketEmpty")
let darkBackground = document.querySelector(".dark-background")
// Récup de la classe subMenu pour le responsive
let subMenuClass = document.querySelector('.subMenu')

myBasket.addEventListener('click', (e) =>{
    e.preventDefault()
    if(basketEmpty.classList.contains("hideContentBasket")){ 
        basketEmpty.classList.remove("hideContentBasket")
        darkBackground.classList.remove("hideDarkBackground")
    } else{ 
        basketEmpty.classList.add("hideContentBasket")
        darkBackground.classList.add("hideDarkBackground")
    }
})

darkBackground.addEventListener('click', () =>{
    console.log("darkBackground click")
    basketEmpty.classList.add("hideContentBasket")
    darkBackground.classList.add("hideDarkBackground")
    // subMenu et innerHTML pour le responsive 
    subMenuClass.classList.remove('visible')
    menuBtn.innerHTML = "Menu"
})