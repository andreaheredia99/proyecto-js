const sectionAll_products = document.querySelector('#all_products')

const sectionFeatured_products = document.querySelector('#featured_products')

const featuredProducts = getFeatured(myProducts)


function changeFeatured(product) {
    product.featured = !product.featured;  // invertimos el valor de true o false (booleano)

    sectionAll_products.textContent = '';  // vaciamos seccion antes de pintar
    sectionFeatured_products.textContent = '';

    paintAllProducts(myProducts, sectionAll_products);  //todos
    paintAllProducts(getFeatured(myProducts), sectionFeatured_products);  //solo destacados
}



/*< article class="product" >
        <figure class="product-figure">
            <img src="./Images/globos.jpg" alt="globos">
            <i class="fa-regular fa-star"></i>
            <figcaption>
                <p>Globos</p>
                <h4>Arco de globos</h4>
                <p>SKU: GLB-003</p>
                <p>Stock: 20</p>
                <p class="price">10 €</p>
            </figcaption>
        </figure>
                 */


function paintProduct(product, section) {
    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const icon = document.createElement('i')
    const figcaption = document.createElement('figcaption')
    const pCategory = document.createElement('p')
    const h4 = document.createElement('h4')
    const pSKU = document.createElement('p')
    const pStock = document.createElement('p')
    const pPrice = document.createElement('p')

    article.classList.add('product') //<article class="product"></article>
    figure.classList.add('product-figure') //<figure class="product-figure"></figure>
    icon.classList.add('fa-star') //<i class= "fa-star"></i>
    pPrice.classList.add('price') //<p class="price"></p>


    //estrella gold
    if (product.featured) {
        icon.classList.add('fa-solid')
        icon.style.color = 'gold'
    } else {
        icon.classList.add('fa-regular')
        icon.style.color = 'gray'
    }


    //estrella clik destacados
    icon.addEventListener('click', () => changeFeatured(product));


    img.src = product.img
    img.alt = product.name

    pCategory.textContent = product.category
    h4.textContent = product.name
    pSKU.textContent = `SKU: ${product.sku}`
    pPrice.textContent = `${product.price.toFixed(2)} €`; //.toFixed(muestra 2 decimales)
    pStock.textContent = `Stock: ${product.stock}`

    article.appendChild(figure)
    figure.append(img, icon, figcaption)
    figcaption.append(pCategory, h4, pSKU, pStock, pPrice)

    section.appendChild(article)
}



function paintAllProducts(list, section) {
    for (let i = 0; i < list.length; i++) {
        paintProduct(list[i], section)
    }
}

//ejecutar función
paintAllProducts(myProducts, sectionAll_products)



function getFeatured(list) {
    return list.filter(product => product.featured === true)
}

//ejecutar función
paintAllProducts(featuredProducts, sectionFeatured_products)