function productos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const equipoElectrico = new productos('Equipo Electrico', 700);
const equipoDigital = new productos('Equipo Digital', 800);

let nombre = prompt("Hola, desde Ache & L Cordoba te damos la bienvenida. ¿Cual es tu nombre?");
let saludo =  alert ("Bienvenido " + nombre + "!");
let pedido = prompt("¿Qué equipo te interesa " + nombre + "?: 1- " + equipoElectrico.nombre + " $" + equipoElectrico.precio + " cada equipo, 2- " + equipoDigital.nombre + " $" + equipoDigital.precio + " cada equipo");
let cantidad = prompt("¿Cuántos equipos querrias instalar?");

if (pedido == 1) {
alert("Tu pedido es: " + equipoElectrico.nombre + " $" + equipoElectrico.precio * cantidad);
} else if (pedido == 2) {
    alert("Tu pedido es: " + equipoDigital.nombre + " $" + equipoDigital.precio * cantidad);
} 
else {
    alert("Numero de equipo ingresado incorrecto. Actualice la pagina y vuelva a ingresar su pedido");
}       
alert("Gracias " + nombre + "!")
