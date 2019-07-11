// Open the confirmedOrder div
const envoyerCommande = document.querySelector('.sendOrder')
const commandeEnvoye = document.querySelector('.confirmedOrder__container')
const visible = document.querySelector('.visible')

envoyerCommande.addEventListener(
    'click',
    function(){
        commandeEnvoye.classList.add("visible")
    }
)