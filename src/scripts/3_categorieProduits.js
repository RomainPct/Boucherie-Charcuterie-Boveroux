class Filter {
    constructor() {
        this.buttons = document.querySelectorAll('.catlist a')
        this.cards = document.querySelectorAll('.product')

        this.init()
    }

    init() {
        for (let i = 0; i < this.buttons.length; i++) {

            this.buttons[i].addEventListener('click', () => {
                // Gérer le style du bouton
                var oldButton = document.querySelector('.prodSection__cat .secondaryButton')
                oldButton.classList.remove('secondaryButton')
                oldButton.classList.add('tertiaryButton')

                this.buttons[i].classList.remove('tertiaryButton')
                this.buttons[i].classList.add('secondaryButton')

                // Gérer l'affichage des bonnes cartes
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