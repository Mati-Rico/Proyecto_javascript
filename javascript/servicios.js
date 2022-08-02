const divWithQuote = document.getElementById("insertQuoteHere");

const getQuote = () => {
fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => (divWithQuote.innerHTML = data.quote));
};

const showAlert = () => {
    Swal.fire({
        title:'Equipo Electrico',
        text:'El costo de adquirir este servicio es de $750',
        icon:'submit',
        confirmButtonText:'Cerrar'
    }
    )
}

let button = document.getElementById('cotElectrico');
button.onclick = showAlert

function multiplicar() {
    let cantidad = document.getElementById('CantidadElectricos').value;
    const precioElectrico = 800;

    let producto = cantidad * precioElectrico;

    document.getElementById('resultado').innerText = producto;
}
function multiplicar2() {
    let cantidad2 = document.getElementById('CantidadDigital').value;
    const precioDigital = 750;

    let producto2 = cantidad2 * precioDigital;

    document.getElementById('resultado2').innerText = producto2;
}
