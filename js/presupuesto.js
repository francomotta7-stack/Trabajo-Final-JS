const formPresupuesto = document.getElementById("form-presupuesto");
const productoSelect = document.getElementById("producto");
const extrasCheckboxes = document.querySelectorAll(".extra");
const plazoInput = document.getElementById("plazo");
const totalSpan = document.getElementById("total-precio");

function calcularTotal() {
    let total = 0;
    const precioProducto = parseFloat(productoSelect.value);
    total += precioProducto;

    extrasCheckboxes.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.value);
        }
    });

    const meses = parseInt(plazoInput.value);
    if (meses >= 3) {
        total = total * 0.9;
    }

    totalSpan.textContent = total.toFixed(2);
}

productoSelect.addEventListener("change", calcularTotal);
plazoInput.addEventListener("input", calcularTotal);
extrasCheckboxes.forEach(extra => {
    extra.addEventListener("change", calcularTotal);
});

formPresupuesto.addEventListener("submit", function(evento) {
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexTlf = /^[0-9]{9}$/;

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;

    if (!regexLetras.test(nombre) || !regexLetras.test(apellidos)) {
        evento.preventDefault();
        alert("El nombre y apellidos solo pueden contener letras.");
        return;
    }

    if (!regexTlf.test(telefono)) {
        evento.preventDefault();
        alert("El teléfono debe tener exactamente 9 números.");
        return;
    }

    alert("Formulario validado y enviado con éxito.");
});