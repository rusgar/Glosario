// Índice de búsqueda - generado automáticamente
const searchIndex = SEARCH_INDEX_DATA;

// Elementos del DOM
let searchInput;
let searchResults;
let currentFocus = -1;

// Inicializar buscador cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        // Evento al escribir
        searchInput.addEventListener('input', handleSearch);
        
        // Evento de teclado para navegar
        searchInput.addEventListener('keydown', handleKeyDown);
        
        // Cerrar resultados al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                closeResults();
            }
        });
    }
});

// Manejar búsqueda
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    currentFocus = -1;
    
    if (query.length === 0) {
        closeResults();
        return;
    }
    
    // Filtrar términos que coincidan
    const matches = searchIndex.filter(term => 
        term.title.toLowerCase().includes(query) ||
        term.description.toLowerCase().includes(query)
    );
    
    // Ordenar por relevancia (coincidencia exacta primero)
    matches.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aStarts = aTitle.startsWith(query);
        const bStarts = bTitle.startsWith(query);
        
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.number - b.number;
    });
    
    displayResults(matches, query);
}

// Mostrar resultados
function displayResults(matches, query) {
    if (matches.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>';
        searchResults.classList.add('active');
        return;
    }
    
    // Limitar a 8 resultados
    const limitedMatches = matches.slice(0, 8);
    
    let html = '';
    limitedMatches.forEach((term, index) => {
        // Resaltar coincidencia en el título
        const highlightedTitle = highlightMatch(term.title, query);
        
        html += `
            <div class="search-result-item" data-index="${index}" onclick="goToTerm('${term.page}', ${term.number})">
                <div class="search-result-header">
                    <span class="search-result-number">#${term.number}</span>
                    <span class="search-result-title">${highlightedTitle}</span>
                </div>
                <div class="search-result-location">
                    ${term.icon} ${term.pageName}
                </div>
            </div>
        `;
    });
    
    if (matches.length > 8) {
        html += `<div class="search-more-results">+ ${matches.length - 8} resultados más</div>`;
    }
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}

// Resaltar coincidencia
function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Escapar caracteres especiales para regex
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Navegar a término - CORREGIDO para evitar duplicación de rutas
function goToTerm(page, termNumber) {
    // Detectar si estamos en una página interna (dentro de modulo_1)
    const currentPath = window.location.pathname;
    const isInModulo = currentPath.includes('/modulo_1/');
    
    let targetUrl;
    
    if (isInModulo) {
        // Estamos en modulo_1, usar ruta relativa (solo el nombre del archivo)
        // page viene como "modulo_1/conceptos.html", extraer solo "conceptos.html"
        const fileName = page.split('/').pop();
        targetUrl = `${fileName}#term-${termNumber}`;
    } else {
        // Estamos en la raíz (index.html), usar ruta absoluta completa
        targetUrl = `/${page}#term-${termNumber}`;
    }
    
    window.location.href = targetUrl;
}

// Cerrar resultados
function closeResults() {
    searchResults.classList.remove('active');
    searchResults.innerHTML = '';
}

// Manejar navegación con teclado
function handleKeyDown(e) {
    const items = searchResults.getElementsByClassName('search-result-item');
    
    if (e.keyCode === 40) { // Flecha abajo
        e.preventDefault();
        currentFocus++;
        addActive(items);
    } else if (e.keyCode === 38) { // Flecha arriba
        e.preventDefault();
        currentFocus--;
        addActive(items);
    } else if (e.keyCode === 13) { // Enter
        e.preventDefault();
        if (currentFocus > -1 && items[currentFocus]) {
            items[currentFocus].click();
        }
    } else if (e.keyCode === 27) { // Escape
        closeResults();
        searchInput.blur();
    }
}

// Añadir clase activa al item seleccionado
function addActive(items) {
    if (!items || items.length === 0) return;
    
    removeActive(items);
    
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    
    items[currentFocus].classList.add('active');
}

// Remover clase activa
function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}