// function productos(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
// }
// const equipoElectrico = new productos('Equipo Electrico', 700);
// const equipoDigital = new productos('Equipo Digital', 800);

// let nombre = prompt("Hola, desde Ache & L Cordoba te damos la bienvenida. ¿Cual es tu nombre?");
// let saludo =  alert ("Bienvenido " + nombre + "!");
// let pedido = prompt("¿Qué equipo te interesa " + nombre + "?: 1- " + equipoElectrico.nombre + " $" + equipoElectrico.precio + " cada equipo, 2- " + equipoDigital.nombre + " $" + equipoDigital.precio + " cada equipo");
// let cantidad = prompt("¿Cuántos equipos querrias instalar?");

// if (pedido == 1) {
// alert("Tu pedido es: " + equipoElectrico.nombre + " $" + equipoElectrico.precio * cantidad);
// } else if (pedido == 2) {
//     alert("Tu pedido es: " + equipoDigital.nombre + " $" + equipoDigital.precio * cantidad);
// } 
// else {
//     alert("Numero de equipo ingresado incorrecto. Actualice la pagina y vuelva a ingresar su pedido");
// }       
// alert("Gracias " + nombre + "!")


let nombre = prompt("Hola, desde Ache & L Cordoba te damos la bienvenida. ¿Cual es tu nombre?");
let saludo =  alert ("Bienvenido " + nombre + "!")

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarEquipo(){}
}
const producto1 = new Producto ('Equipo Electrico',750);
const producto2 = new Producto ('Equipo Digital',800);

class DetallePedido{
    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    mostrarDetalle(){}
}

const detallePedido1 = new DetallePedido (producto1, 2);
const detallePedido2 = new DetallePedido (producto2, 2);


class Pedido {
    constructor (fecha, detalles){
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal (){
        let total = 0;
        for(const detalle of this.detalles){
            total = total + detalle.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido (){}
}

const array = [];
array.push(detallePedido1);
array.push(detallePedido2);

const pedido1 = new Pedido (new Date(), array);

console.log(pedido1.calcularTotal());

let boton = document.querySelector('.boton')
boton.addEventListener('click', solicitar)

function solicitar(){
    console.log('Gracias por solicitar nuestro servicio, nos contactaremos contigo a la brevedad')
}

// const submitForm = (ID) => {
//     let form =document.getElementById(ID);
//     form.addEventListener('submit', (e) =>{
//         e.preventDefault(); 
//         console.log(e.target);
//         console.log('submitForm')
//         console.log(form.children)
//     })
// }
// submitForm('formulario')

// const dt = DateTime.now();

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )

const showAlert = () => {
    Swal.fire({
        title:'Eviado',
        text:'La consulta fue enviada correctamente',
        icon:'submit',
        confirmButtonText:'Cool'
    }
    )
}

let button = document.getElementById('alert');
button.onclick = showAlert