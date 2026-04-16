// --- 1. MODO OSCURO ---
const btnToggle = document.getElementById('dark-mode-toggle');

btnToggle.addEventListener('click', () => {
    // La "lógica": Si el body tiene la clase, se la quita; si no, se la pone.
    document.body.classList.toggle('dark-mode');
});


// --- 2. EFECTO TERMINAL (TYPEWRITER) ---
const titulo = document.getElementById('titulo-principal');
const texto = "LoquendoDEV";
let indice = 0;

function escribirTexto() {
    if (indice < texto.length) {
        titulo.innerHTML += texto.charAt(indice);
        indice++;
        // Velocidad de escritura en milisegundos
        setTimeout(escribirTexto, 150); 
    }
}

// Iniciamos la función al cargar la página
window.onload = escribirTexto;

// ===========================================================
// =========================================================== Borrar si es necesario
// ===========================================================

//proyectos.html
document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filtros-btn');
    const projectCards = document.querySelectorAll('.carta-proyecto');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            //Actualiza estilo del botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            //Obtener categoría seleccionada
            const filterValue = btn.getAttribute('data-filter');

            //Filtrar las tarjetas
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});