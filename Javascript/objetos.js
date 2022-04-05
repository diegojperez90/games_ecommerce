const carritoCompras = [];

const contenedorMain = document.querySelector('.contenedorMain')

const crearTarjetaProductos = (juegos) => {
    juegos.forEach ( (elem) => {
        const columna = document.createElement('div');
        const tarjeta = document.createElement('div');
        const img = document.createElement('img');
        const tarjetaBody = document.createElement('div');
        const nombre = document.createElement('h3');
        const precio = document.createElement('p');
        const stock = document.createElement('p');
        const botonAgregar = document.createElement('button');

    
        img.src = elem.imagen;
        nombre.innerText = elem.nombre;
        precio.innerText = '$' + elem.precioLista;
        stock.innerText = 'Stock disponible: ' + elem.stock;
        botonAgregar.innerText = 'AGREGAR AL CARRITO ';
    

        botonAgregar.onclick = () => {
            elem.idTemp = new Date().getTime();
            
            const nuevoProducto =  {...elem};
            console.log(carritoCompras);

            carritoCompras.push(nuevoProducto);
            localStorage.setItem('carrito_de_compras',JSON.stringify(carritoCompras));

            Toastify({
                text: "Agregaste " + elem.nombre + " al carrito",
                position: 'center',
                duration: 4000,
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c92d)'
                }
            }).showToast();
        }
        
        
        tarjeta.appendChild(img)
        tarjetaBody.appendChild(nombre);
        tarjetaBody.appendChild(precio);
        tarjetaBody.appendChild(stock);
        tarjetaBody.appendChild(botonAgregar);
        tarjeta.appendChild(tarjetaBody)
        columna.appendChild(tarjeta);
        contenedorMain.appendChild(columna);
    
        columna.classList.add('div1', 'col-md-6','col-lg-4', 'p-2');
        tarjeta.classList.add('card');
        tarjetaBody.classList.add('card-body')
        img.classList.add('card-img-body', 'imagen-tarjeta')
        botonAgregar.classList.add('btn', 'btn-success')
    })
}

crearTarjetaProductos([{
    "id": "1",
    "imagen": "../imagenes/maletin.jpg",
    "nombre": "Maletin de poker",
    "precioLista": "6000",
    "stock": "10"
}])

// fetch('../data/data.json')
//     .then(respuesta => respuesta.json())
//     .then (datos => {
//         crearTarjetaProductos(datos.productos)
// })
