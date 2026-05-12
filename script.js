let streamActual = null;

async function activarCamara(tipo) {
    const visor = document.getElementById('visor-ar');
    const filtro = document.getElementById('filtro-vidrio');
    const video = document.getElementById('video-feed');

    // Aplicar clase de filtro
    filtro.className = ''; 
    if(tipo !== 'claro') filtro.classList.add('ar-' + tipo);

    try {
        streamActual = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });
        video.srcObject = streamActual;
        visor.classList.remove('oculto');
    } catch (err) {
        alert("Error al acceder a la cámara. Asegúrate de usar HTTPS.");
    }
}

function cerrarCamara() {
    const visor = document.getElementById('visor-ar');
    if (streamActual) {
        streamActual.getTracks().forEach(track => track.stop());
    }
    visor.classList.add('oculto');
}
