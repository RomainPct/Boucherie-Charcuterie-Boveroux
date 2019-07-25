var menuBtn = document.querySelector('.menuButton')
var subMenu = document.querySelector('.subMenu')
var greyOpacity = document.querySelector('.greyOpacity')

menuBtn.addEventListener(
    'click',
    function(){
        if(subMenu.classList.contains('visible') == true){
            subMenu.classList.remove('visible')
            greyOpacity.classList.remove('visible')
            menuBtn.innerHTML = "Menu"
        } else {
            subMenu.classList.add('visible')
            greyOpacity.classList.add('visible')
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
