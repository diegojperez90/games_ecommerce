function obtenerDatosCarrito() {
    return JSON.parse(localStorage.getItem('carrito_de_compras'));
}

let carrito = obtenerDatosCarrito();

const divSuperior = document.querySelector('.container');

const tabla = document.querySelector('.tabla-body');

const vaciar = document.querySelector('.boton-vaciar');

vaciar.onclick = () => {
    console.log('apretando vaciar')
    carrito = [];
    tabla.innerHTML = '';
    localStorage.removeItem('carrito_de_compras');
    console.log('vaciando carrito' + carrito)
}


const agregandoAlCarrito = () => {
    if (carrito != null) {
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
    
    
            botonEliminar.onclick = () => {
                for (let i = 0; i < carrito.length; i++) {
                    const item = carrito[i];
                    if (element.idTemp === item.idTemp ) {
                        carrito.splice(i, 1);
                        localStorage.setItem('carrito_de_compras',JSON.stringify( carrito) );
                        tabla.removeChild(fila);
                        break;
                    }
                }
            }
    
    
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
}


agregandoAlCarrito();



