document.addEventListener("DOMContentLoaded", () => {
    const latNegocio = 39.5696; 
    const lngNegocio = 2.6502;

    const map = L.map('mapa').setView([latNegocio, lngNegocio], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            const latUsuario = posicion.coords.latitude;
            const lngUsuario = posicion.coords.longitude;

            L.Routing.control({
                waypoints: [
                    L.latLng(latUsuario, lngUsuario),
                    L.latLng(latNegocio, lngNegocio)
                ],
                language: 'es',
                routeWhileDragging: false
            }).addTo(map);
        }, () => {
            alert("Acepta los permisos de ubicación para trazar la ruta.");
        });
    }
});