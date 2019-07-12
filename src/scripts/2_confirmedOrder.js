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
            localStorage.setItem('name', inputs[0].value) // Register the name in local storage
            console.log(inputs[0].value)
        }
        if((inputs[1].value.length <= 0) || verifMail(inputs[1].value)){ // Mail verification
            inputs[1].classList.add('error')
            inputs[1].parentElement.lastElementChild.innerHTML = "Entrez une adresse mail valide"
            e.preventDefault()
        }else{
            localStorage.setItem('mail', inputs[1].value) // Register the mail in local storage
            console.log(inputs[1].value)
        }
    })

    function verifMail(mail){
        var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regexMail.test(mail)
    }

    function prefecthInputs(){
        let nom = localStorage.getItem('name') // Retrieve the name in local storage

        if(inputs[0].value == ""){ // If it is not empty -> set it to inputs[0]
            inputs[0].value = nom
        }

        let mail = localStorage.getItem('mail') // Retrieve the mail in local storage

        if(inputs[1].value == ""){ // If it is not empty -> set it to inputs[1]
            inputs[1].value = mail
        }

        console.log(nom)
        console.log(mail)
    }
    prefecthInputs()

}