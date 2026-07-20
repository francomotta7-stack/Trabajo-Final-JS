document.addEventListener("DOMContentLoaded", () => {
    const fotos = document.querySelectorAll('.foto-click');
    const modal = document.getElementById('modal');
    const imgModal = document.getElementById('img-modal');

    fotos.forEach(foto => {
        foto.addEventListener('click', () => {
            imgModal.src = foto.src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});