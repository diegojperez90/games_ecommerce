const carrito = JSON.parse(localStorage.getItem('carrito_de_compras'));

const tabla = document.querySelector('.tabla-body')

const agregandoAlCarrito = () => {
    carrito.forEach(element => {
        const fila = document.createElement('tr')
        const producto = document.createElement('td')
        const img = document.createElement('img')
        const nombre = document.createElement('td')
        const precio = document.createElement('td')
        const eliminar = document.createElement('td')
        const botonEliminar = document.createElement('button')

        
        img.src = element.imagen;
        nombre.innerText = element.nombre;
        precio.innerText = element.precioLista;
        botonEliminar.innerText = 'Eliminar';

        
        producto.appendChild(img)
        fila.appendChild(producto)
        fila.appendChild(nombre)
        fila.appendChild(precio)
        eliminar.appendChild(botonEliminar)
        fila.appendChild(eliminar)
        tabla.appendChild(fila)

        img.classList.add('foto_producto', 'm-0');
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm')
        fila.classList.add('align-items-center', 'flex-fill')
    });
}


agregandoAlCarrito();
// console.log(agregandoAlCarrito());
// console.log(carrito)
