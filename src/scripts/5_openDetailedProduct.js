const detailedProductContainer = document.querySelector('#detailedProductContainer')

function setOpenableProducts(){
    const products = document.querySelectorAll('.prodSectionList__product')
    products.forEach(function(product){
        product.addEventListener('click',function(){
            const id = product.getAttribute("data-productid"),
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
        // console.log(xhr.responseText)
        detailedProductOpened()
        setDetailedProductCloseButton()
    })
    xhr.send()
}

function setDetailedProductCloseButton(){
    let closeButton = document.querySelector('.closeDetailedProduct')
    closeButton.addEventListener('click',function(){
        detailedProductContainer.innerHTML = ""
    })
}

setOpenableProducts()