const form = document.querySelector('form')
let inputs = document.querySelectorAll('input')
let errors = document.querySelectorAll('.error')

if(form != null){

    inputs.forEach(function (input) {
        input.addEventListener("input", function (e){
            input.classList.remove('error')
            input.parentElement.lastElementChild.innerHTML = ""
        })
    })

    form.addEventListener("submit", function (e){
        console.log("submit")
        console.log(inputs)
        if(inputs[0].value.length <= 0){
            inputs[0].classList.add('error')
            inputs[0].parentElement.lastElementChild.innerHTML = "Champ obligatoire"
            e.preventDefault()
        }else{
            // Enregistrer le nom en local storage
        }
        if((inputs[1].value.length <= 0) || verifMail(inputs[1].value)){ // Mail verification
            inputs[1].classList.add('error')
            inputs[1].parentElement.lastElementChild.innerHTML = "Entrez une adresse mail valide"
            e.preventDefault()
        }else{
            // Enregistrer le mail en local storage
        }
    })

    function verifMail(mail){
        var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regexMail.test(mail)
    }

    function prefecthInputs(){
        // Récupérer le nom en local storage
            // Si il est pas vide -> le mettre à inputs[0]
        // Récupérer le mail en local storage
            // Si il est pas vide -> le mettre à inputs[1]
    }
    prefecthInputs() // On lance la fonction à chaque chargement du js

}