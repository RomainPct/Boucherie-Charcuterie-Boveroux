const detailedProductContainer = document.querySelector('#detailedProductContainer')

function setOpenableProducts(){
    const products = document.querySelectorAll('.prodSectionList__product')
    products.forEach(function(product){
        product.addEventListener('click',function(){
            const id = product.getAttribute("data-productrealid"),
                type = product.getAttribute("data-producttype"),
                url = "/pages/detailproduit.php?id="+id+"&type="+type
            displayProduct(url)
        })
    })
}

function displayProduct(url){
    xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.addEventListener('load',function () {
        detailedProductContainer.innerHTML = xhr.responseText
        detailedProductOpened()
        setDetailedProductCloseButton()
    })
    xhr.send()
}

function setDetailedProductCloseButton(){
    let closeButton = document.querySelector('.closeDetailedProduct')
    closeButton.addEventListener('click',function(){
        let detailedProduct = detailedProductContainer.querySelector('#detailedProduct')
        let animPos = 1;
        let anim = setInterval(function(){
            if (animPos > 18) {
                clearInterval(anim)
                detailedProductContainer.innerHTML = ""
            } else {
                detailedProduct.style.opacity = 1 - ( animPos / 18 )
            }
            animPos ++;
        }, 16)
    })
}

setOpenableProducts()