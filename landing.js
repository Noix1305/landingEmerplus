const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const downloadSection = document.getElementById('download-section');

// Limpiamos cualquier contenido previo
downloadSection.innerHTML = '';

// Si es dispositivo móvil, mostrar botón de descarga
if (isMobile) {
    downloadSection.innerHTML = `
        <a href="https://ndmnmgusnnmndqwigiyp.supabase.co/storage/v1/object/public/apk_storage/emerplus.apk?t=2024-12-08T23%3A27%3A29.667Z"
           class="btn btn-danger btn-lg btn-download" id="downloadButton">
            Descargar Aplicación
        </a>`;
    
    const notification = document.querySelector("#notification");
    const downloadButton = document.querySelector("#downloadButton");

    downloadButton.addEventListener("click", (e) => {
        // Mostrar el mensaje
        notification.classList.remove("d-none");

        // Ocultar después de 3 segundos
        setTimeout(() => {
            notification.classList.add("d-none");
        }, 3000);
    });
} else {
    // Si es dispositivo de escritorio, mostrar código QR
    downloadSection.innerHTML = `
        <div class="qr-code">
            <p>Escanea este código QR para descargar la aplicación:</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ndmnmgusnnmndqwigiyp.supabase.co/storage/v1/object/public/apk_storage/emerplus.apk?t=2024-12-08T23%3A27%3A29.667Z" alt="Código QR">
        </div>`;
}
