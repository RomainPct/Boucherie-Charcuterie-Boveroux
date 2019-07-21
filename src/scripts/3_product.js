class Filter {
    constructor() {
        this.buttons = document.querySelectorAll('.catlist a')
        this.cards = document.querySelectorAll('.product')

        this.init()
    }

    init() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                let target = this.buttons[i].getAttribute('data-target');

                for (let j = 0; j < this.cards.length; j++) {
                    if (this.cards[j].classList.contains(target)) {
                        this.cards[j].style.display = 'block'
                    } else {
                        this.cards[j].style.display = 'none'
                    }
                }
            })
        }
    }

}

let myFilter = new Filter()

let button = document.querySelectorAll("a.primaryButton")
let remov = document.querySelectorAll(".remove")

button.addEventListener('click', function (e){
    primarybutton.classList.add(".remove")
    console.log(remove)
})