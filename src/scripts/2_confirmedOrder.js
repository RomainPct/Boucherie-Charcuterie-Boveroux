const envoyerCommande = document.querySelector('.sendOrder')
const commandeEnvoye = document.querySelector('.confirmedOrder__container')
const visible = document.querySelector('.visible')
const form = document.querySelector('form')

envoyerCommande.addEventListener(
    'click',
    function(){
        if(form != null){ // Form verification

            let inputs = document.querySelectorAll('input')
            let errors = document.querySelectorAll('.error')
        
            inputs.forEach(function (input) {
                input.addEventListener("input", function (e) {
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
                }
                if((inputs[1].value.length <= 0) || verifMail(inputs[1].value)){ // Mail verification
                    inputs[1].classList.add('error')
                    inputs[1].parentElement.lastElementChild.innerHTML = "Entrez une adresse mail valide"
                    e.preventDefault()
                }
            })
        
            function verifMail(mail){
                var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return !regexMail.test(mail)
            }
        
        }else{ // Open the confirmedOrder div
            commandeEnvoye.classList.add("visible")
        }
    }
)