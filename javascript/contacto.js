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