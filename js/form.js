const form = document.querySelector('#formProducts')
const nameInput = document.querySelector('#nameProduct')
const minPriceInput = document.querySelector('#minPrice')
const maxPriceInput = document.querySelector('#maxPrice')


// con getFormData extraemos los datos que el usuario escribio en el formulario
function getFormData(event) {

    event.preventDefault(); // evitar recarga

    // Guardamos los valores introducidos por el usuario
    const newProduct = {
        name: nameInput.value.trim().toLowerCase(), // .trim (quita los espacios delante y detrás)
        minPrice: Number(minPriceInput.value),  //convierte string a numero
        maxPrice: Number(maxPriceInput.value),
    };
    console.log("Búsqueda del usuario:", newProduct);

    /*
        // Función de filtrado por nombre o categoría
        function filterByNameOrCategory() {
            return myProducts.filter(product =>  //nuevo array con las condiciones
                product.name.toLowerCase().includes(newProduct.name) ||  //condiciones: nombre o categoria
                product.category.toLowerCase().includes(newProduct.name)
            );
        }

        // Función de filtrado por precio
        function filterByPrice(productsArray) {
            return productsArray.filter(product =>
                product.price >= newProduct.minPrice && //rango de precio 
                product.price <= newProduct.maxPrice
            );
        }

        // Ejecutamos las funciones
        const filteredByNameOrCategory = filterByNameOrCategory();
        console.log("Filtrado por nombre/categoría:", filteredByNameOrCategory);

        const filteredByPrice = filterByPrice(filteredByNameOrCategory);
        console.log("Filtrado por precio:", filteredByPrice);
    */


    //funcion filtro nombre, categoria y precio
    function filterProducts() {
        return myProducts.filter(product =>  //devuelve nuevo array con los productos que cumplan las condiciones

            (product.name.toLowerCase().includes(newProduct.name) ||  // || nombre o categoria
                product.category.toLowerCase().includes(newProduct.name)) &&
            // && que cumpla ambas (nombre/categoria y precio)
            product.price >= newProduct.minPrice &&  //precio dentro del rango minPrice y maxPrice
            product.price <= newProduct.maxPrice
        );
    }

    //Ejecutamos la funcion
    const filteredResults = filterProducts();
    console.log("Productos filtrados:", filteredResults);


    sectionAll_products.textContent = ''; //vaciamos seccion antes de pintar

    // Pintamos los productos que cumplen el filtro
    paintAllProducts(filteredResults, sectionAll_products);


    form.reset(); // vacía el formulario
}

// LISTENER
form.addEventListener('submit', getFormData);