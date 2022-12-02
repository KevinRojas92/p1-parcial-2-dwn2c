'use strict';

class Producto {
    constructor (id, nombre, descripcion, precio, imagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }
}

let producto1 = new Producto (1, 'Hamburguesa Criolla', 'Hamburguesa con un medallon de carne, pollo desmechado, queso, lechuga, tomate y cebolla acompañado con papas fritas.', 1900, 'img/hamburguesa1.jpg', 'Hamburguesas');

let producto2 = new Producto (2, 'Hamburguesa Argentina', 'Hamburguesa con un medallon de carne, chorizo, queso, lechuga, tomate y cebolla acompañado con papas fritas.', 1700, 'img/hamburguesa2.jpg', 'Hamburguesas');

let producto3 = new Producto (3, 'Perro Argentino', 'Perro caliente con salchica alemana con chorizo, carne desmechada, queso y cebolla acompañado con papas fritas.', 1900, 'img/perro1.jpg', 'Perros Calientes');

let producto4 = new Producto (4, 'Perro Tradi', 'Perro caliente con salchica alemana con papas pai, salsa de la casa, queso y cebolla acompañado con papas fritas.', 1400, 'img/perro2.jpg', 'Perros Calientes');

let producto5 = new Producto (5, 'Salchi Arabe', 'Salchipapa con papa criolla, bolitas de carne, jamón, queso y salchicha alemana.', 1500, 'img/salchipapa1.jpg', 'Salchipapas');

let producto6 = new Producto (6, 'Nuestra Salchi', 'Salchipapa con papa criolla, salchicha alemana, jamón, queso y salsa de la casa.', 1200, 'img/salchipapa2.jpg', 'Salchipapas');

let productos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
];

let productos_carrito = [];
let productos_filtrados = [];

function filtar () {
    let producto_id1 = productos_carrito.filter(item => item.id == 1);
    productos_filtrados.push(producto_id1);

    let producto_id2 = productos_carrito.filter(item => item.id == 2);
    productos_filtrados.push(producto_id2);

    let producto_id3 = productos_carrito.filter(item => item.id == 3);
    productos_filtrados.push(producto_id3);

    let producto_id4 = productos_carrito.filter(item => item.id == 4);
    productos_filtrados.push(producto_id4);

    let producto_id5 = productos_carrito.filter(item => item.id == 5);
    productos_filtrados.push(producto_id5);

    let producto_id6 = productos_carrito.filter(item => item.id == 6);
    productos_filtrados.push(producto_id6);

    productos_filtrados.forEach(element => {
        if (element.length > 0) {
            let repetidas = element.length;
            let nombre_producto = element[0].nombre;

            let div_producto = document.createElement("div");
            div_producto.setAttribute("class", "linea")
    
            contenido_modal.append(div_producto);


            let p_cantidad = document.createElement("p");
            p_cantidad.innerText = `${repetidas}`;
    
            div_producto.append(p_cantidad);
    
            let p_nombre = document.createElement("p");
            p_nombre.innerText = `${nombre_producto}`;
    
            div_producto.append(p_nombre);
    
            let eliminar = document.createElement("a");
            eliminar.setAttribute("href", "#");
            eliminar.innerText = "x";
            eliminar.addEventListener("click", () => {
                div_producto.setAttribute("class", "");
                div_producto.innerText = "";
            
                cantidad = cantidad -1;
            
                productos_carrito.splice(element, 1);

                let items = document.getElementById("items");
                items.innerText = `${cantidad}`;

                plata -= element.precio;
                let total = document.getElementById("total");
                total.innerText = `${plata}`;
            });
    
            div_producto.append(eliminar);
        }
    });
}

let cantidad = 0;
let plata = 0;

function cargarpagina () {
    productos.forEach(element => {
        let divPadre = document.querySelector(".contenedor_general");
        
        let div = document.createElement("div");
        div.setAttribute("class", "contenedor");
        
        divPadre.append(div);
        
        let img = document.createElement("img");
        img.setAttribute("src", `${element.imagen}`);
        
        div.append(img);
    
        let divInterno = document.createElement("div");
        
        div.append(divInterno);
        
        let nombre = document.createElement("h3");
        nombre.innerText = `${element.nombre}`;
        
        divInterno.append(nombre);
    
        let descripcion = document.createElement("p");
        descripcion.innerText = `${element.descripcion}`;
    
        divInterno.append(descripcion);
    
        let precio = document.createElement("p");
        precio.innerText = `$ ${element.precio}`;
    
        divInterno.append(precio);
    
        let categoria = document.createElement("p");
        categoria.innerText = `${element.categoria}`;
    
        divInterno.append(categoria);

        let boton = document.createElement("button");
        boton.setAttribute("class", "agregar");
        boton.innerText = "Agregar";
        boton.addEventListener("click", () => {
            cantidad++;

            productos_carrito.push(element);

            let items = document.getElementById("items");
            items.innerText = `${cantidad}`;

            plata += element.precio;
            let total = document.getElementById("total");
            total.innerText = `${plata}`;
        });

        div.append(boton);
    });
}

cargarpagina();

document.querySelector("#hamburguesa").addEventListener("click", () => {
    document.querySelector(".contenedor_general").innerText = "";

    productos.forEach(element => {
        if (element.categoria === "Hamburguesas") {
            let divPadre = document.querySelector(".contenedor_general");
            
            let div = document.createElement("div");
            div.setAttribute("class", "contenedor");
            
            divPadre.append(div);
            
            let img = document.createElement("img");
            img.setAttribute("src", `${element.imagen}`);
            
            div.append(img);
        
            let divInterno = document.createElement("div");
            
            div.append(divInterno);
            
            let nombre = document.createElement("h3");
            nombre.innerText = `${element.nombre}`;
            
            divInterno.append(nombre);
        
            let descripcion = document.createElement("p");
            descripcion.innerText = `${element.descripcion}`;
        
            divInterno.append(descripcion);
        
            let precio = document.createElement("p");
            precio.innerText = `$ ${element.precio}`;
        
            divInterno.append(precio);
        
            let categoria = document.createElement("p");
            categoria.innerText = `${element.categoria}`;
        
            divInterno.append(categoria);
    
            let boton = document.createElement("button");
            boton.setAttribute("class", "agregar");
            boton.innerText = "Agregar";
            boton.addEventListener("click", () => {
                cantidad++;

                productos_carrito.push(element);

                let items = document.getElementById("items");
                items.innerText = `${cantidad}`;

                plata += element.precio;
                let total = document.getElementById("total");
                total.innerText = `${plata}`;
            });
    
            div.append(boton);
        }
    });
});

document.querySelector("#perros").addEventListener("click", () => {
    document.querySelector(".contenedor_general").innerText = "";

    productos.forEach(element => {
        if (element.categoria === "Perros Calientes") {
            let divPadre = document.querySelector(".contenedor_general");
            
            let div = document.createElement("div");
            div.setAttribute("class", "contenedor");
            
            divPadre.append(div);
            
            let img = document.createElement("img");
            img.setAttribute("src", `${element.imagen}`);
            
            div.append(img);
        
            let divInterno = document.createElement("div");
            
            div.append(divInterno);
            
            let nombre = document.createElement("h3");
            nombre.innerText = `${element.nombre}`;
            
            divInterno.append(nombre);
        
            let descripcion = document.createElement("p");
            descripcion.innerText = `${element.descripcion}`;
        
            divInterno.append(descripcion);
        
            let precio = document.createElement("p");
            precio.innerText = `$ ${element.precio}`;
        
            divInterno.append(precio);
        
            let categoria = document.createElement("p");
            categoria.innerText = `${element.categoria}`;
        
            divInterno.append(categoria);
    
            let boton = document.createElement("button");
            boton.setAttribute("class", "agregar");
            boton.innerText = "Agregar";
            boton.addEventListener("click", () => {
                cantidad++;

                productos_carrito.push(element);

                let items = document.getElementById("items");
                items.innerText = `${cantidad}`;

                plata += element.precio;
                let total = document.getElementById("total");
                total.innerText = `${plata}`;
            });
    
            div.append(boton);
        }
    });
});

document.querySelector("#salchipapa").addEventListener("click", () => {
    document.querySelector(".contenedor_general").innerText = "";

    productos.forEach(element => {
        if (element.categoria === "Salchipapas") {
            let divPadre = document.querySelector(".contenedor_general");
            
            let div = document.createElement("div");
            div.setAttribute("class", "contenedor");
            
            divPadre.append(div);
            
            let img = document.createElement("img");
            img.setAttribute("src", `${element.imagen}`);
            
            div.append(img);
        
            let divInterno = document.createElement("div");
            
            div.append(divInterno);
            
            let nombre = document.createElement("h3");
            nombre.innerText = `${element.nombre}`;
            
            divInterno.append(nombre);
        
            let descripcion = document.createElement("p");
            descripcion.innerText = `${element.descripcion}`;
        
            divInterno.append(descripcion);
        
            let precio = document.createElement("p");
            precio.innerText = `$ ${element.precio}`;
        
            divInterno.append(precio);
        
            let categoria = document.createElement("p");
            categoria.innerText = `${element.categoria}`;
        
            divInterno.append(categoria);
    
            let boton = document.createElement("button");
            boton.setAttribute("class", "agregar");
            boton.innerText = "Agregar";
            boton.addEventListener("click", () => {
                cantidad++;

                productos_carrito.push(element);

                let items = document.getElementById("items");
                items.innerText = `${cantidad}`;

                plata += element.precio;
                let total = document.getElementById("total");
                total.innerText = `${plata}`;
            });
    
            div.append(boton);
        }
    });
});

document.querySelector("#ver_carrito").addEventListener("click", () => {
    let cont_modal = document.getElementById("cont_modal");
    cont_modal.innerText = "";
    cont_modal.setAttribute("class", "");

    let modal = document.createElement("div");
    modal.setAttribute("id", "modal");

    cont_modal.append(modal);

    let header_modal = document.createElement("div");
    header_modal.setAttribute("id", "header_modal");

    modal.append(header_modal);

    let sub = document.createElement("h2");
    sub.innerText = "Productos seleccionados";

    header_modal.append(sub);

    let cerrar = document.createElement("a");
    cerrar.setAttribute("href", "#");
    cerrar.innerText = "x";
    cerrar.addEventListener("click", () => {
        cont_modal.setAttribute("class", "display_none");
    });

    header_modal.append(cerrar);

    let contenido_modal = document.createElement("div");
    contenido_modal.setAttribute("id", "contenido_modal");

    modal.append(contenido_modal);

    filtar();
    /* productos_carrito.forEach(element => {
        let div_producto = document.createElement("div");
        div_producto.setAttribute("class", "linea")
    
        contenido_modal.append(div_producto);


        let p_cantidad = document.createElement("p");
        p_cantidad.innerText = `${repetidas}`;
    
        div_producto.append(p_cantidad);
    
        let p_nombre = document.createElement("p");
        p_nombre.innerText = `${nombre_producto}`;
    
        div_producto.append(p_nombre);
    
        let eliminar = document.createElement("a");
        eliminar.setAttribute("href", "#");
        eliminar.innerText = "x";
        eliminar.addEventListener("click", () => {
            div_producto.setAttribute("class", "");
            div_producto.innerText = "";
            
            cantidad = cantidad -1;
            
            productos_carrito.splice(element, 1);

            let items = document.getElementById("items");
            items.innerText = `${cantidad}`;

            plata -= element.precio;
            let total = document.getElementById("total");
            total.innerText = `${plata}`;
        });
    
        div_producto.append(eliminar);
    });*/
});