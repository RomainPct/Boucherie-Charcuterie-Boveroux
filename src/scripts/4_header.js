var menuBtn = document.querySelector('.menuButton')
var subMenu = document.querySelector('.subMenu')
var greyOpacity = document.querySelector('.greyOpacity')
var basketHidden = document.querySelector('.headerContainer__inside__cat__menuBasketEmpty')
var darkScreen = document.querySelector(".dark-background")

menuBtn.addEventListener(
    'click',
    function(){
        if(subMenu.classList.contains('visible') == true){
            subMenu.classList.remove('visible')
            greyOpacity.classList.remove('visible')
            darkScreen.classList.add("hideDarkBackground")
            menuBtn.innerHTML = "Menu"
        } else {
            subMenu.classList.add('visible')
            greyOpacity.classList.add('visible')
            basketHidden.classList.remove('hideContentBasket')
            darkScreen.classList.remove("hideDarkBackground")
            menuBtn.innerHTML = "Fermer"
        }
    }
)

greyOpacity.addEventListener(
    'click',
    function(){
        subMenu.classList.remove('visible')
        greyOpacity.classList.remove('visible')
        menuBtn.innerHTML = "Menu"
    }
)
