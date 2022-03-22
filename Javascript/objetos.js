class Producto {
    constructor(id, imagen, nombre, precioLista, stock) {
        this.id = id,
        this.imagen = imagen,
        this.nombre = nombre,
        this.precioLista = precioLista,
        this.stock = stock
    }
    precioIva() {
        let precioAumento = this.precioLista * 1.21;
        return precioAumento;
    }
}

let producto1 = new Producto(1, '/imagenes/maletin.jpg','Maletin de poker', 6000, 10);
let producto2 = new Producto(2, '/imagenes/backgammon.webp','Backgammon', 3000, 5);
let producto3 = new Producto(3, '/imagenes/ruleta.jpeg','Ruleta', 4500, 20);
let producto4 = new Producto(4, '/imagenes/ajedrez.jpg','Ajedrez PRO', 7800, 3);
let producto5 = new Producto(5, '/imagenes/monopoly.jpeg','Monopoly', 4200, 4);
let producto6 = new Producto(6, '/imagenes/teg.png','Teg', 5500, 5);
let producto7 = new Producto(7, '/imagenes/carrera-mente.jpeg','Carrera de mente', 14000, 1);
let producto8 = new Producto(8, '/imagenes/pictionary.webp','Pictionary', 4500, 8);

const juegos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

const carritoCompras = [];


const contenedorMain = document.querySelector('.contenedorMain')

const crearTarjetaProductos = () => {
    juegos.forEach ( (elem) => {
        const columna = document.createElement('div');
        const tarjeta = document.createElement('div');
        const img = document.createElement('img');
        const tarjetaBody = document.createElement('div');
        const nombre = document.createElement('h3');
        const precio = document.createElement('p');
        const stock = document.createElement('p')
        const boton = document.createElement('button')

    
        img.src = elem.imagen;
        nombre.innerText = elem.nombre;
        precio.innerText = '$' + elem.precioLista;
        stock.innerText = 'Stock disponible: ' + elem.stock;
        boton.innerText = 'AGREGAR AL CARRITO ';
    

        boton.onclick = () => {
            elem.idTemp = new Date().getTime();
            
            const nuevoProductos =  {...elem};
            carritoCompras.push(nuevoProductos);
    
            localStorage.setItem('carrito_de_compras',JSON.stringify( carritoCompras) );
        }
    
        
        tarjeta.appendChild(img)
        tarjetaBody.appendChild(nombre);
        tarjetaBody.appendChild(precio);
        tarjetaBody.appendChild(stock);
        tarjetaBody.appendChild(boton);
        tarjeta.appendChild(tarjetaBody)
        columna.appendChild(tarjeta);
        contenedorMain.appendChild(columna);
    
        columna.classList.add('div1', 'col-md-6','col-lg-4', 'p-2');
        tarjeta.classList.add('card');
        tarjetaBody.classList.add('card-body')
        img.classList.add('card-img-body', 'imagen-tarjeta')
        boton.classList.add('btn', 'btn-success')
    })
}


crearTarjetaProductos();







