# 📘 Webglosario - Fundamentos de IA en Programación

## 🎯 Descripción del Proyecto

Webglosario interactivo con **94 términos técnicos** sobre Inteligencia Artificial, Machine Learning y Programación, organizados en **7 categorías temáticas**. Diseñado como material didáctico para el módulo de Introducción a la IA de la **Fundación Dicampus**.

🌐 **Demo en vivo:** [https://webglosario.netlify.app/](https://webglosario.netlify.app/)

---

## ✨ Características Principales

### 🔍 Buscador Inteligente
- **Búsqueda en tiempo real** mientras escribes
- **Autocompletado** - No necesitas escribir el término completo
- **Navegación directa** - Click en un resultado y te lleva al término exacto
- **Resaltado de coincidencias** - Marca en amarillo lo que buscaste
- **Navegación con teclado** - Usa ↑ ↓ Enter para navegar
- **Funciona desde cualquier página** (index o páginas internas)

### 📚 Organización por Categorías
94 términos distribuidos estratégicamente en 7 categorías:

1. **🧠 Fundamentos de IA y Machine Learning** - 13 términos
2. **🔬 Modelos y Técnicas de ML** - 14 términos  
3. **🤖 Herramientas de IA Generativa** - 13 términos
4. **💻 Desarrollo y Testing** - 14 términos
5. **🔒 Seguridad y Arquitectura** - 14 términos
6. **☁️ Servicios Cloud y AWS** - 13 términos
7. **⚖️ Licencias y Regulación** - 13 términos

### 📋 Listado Inteligente
- **3 columnas verticales** en desktop para visualización compacta
- **2 columnas** en tablet
- **1 columna** en móvil
- **Enlaces clicables** a cada término dentro de la página
- **Optimizado para 50+ términos** sin scroll excesivo

### 🎨 Diseño Moderno
- **Colores corporativos:** Gradiente naranja (#e96700 → #ed5c74)
- **Animaciones suaves** al hacer hover
- **Efecto highlight** cuando llegas a un término desde el buscador
- **Responsive design** - Se adapta a cualquier dispositivo
- **Favicon personalizado**

---

## 📁 Estructura de Archivos

```
GLOSARIO/
│
├── index.html                          # Página principal con 7 categorías
├── favicon.png                         # Icono del sitio
│
└── modulo_1/                           # Módulo 1: Fundamentos de IA
    │
    ├── css/
    │   └── styles.css                  # Estilos globales (colores, responsive)
    │
    ├── js/
    │   ├── search.js                   # Lógica del buscador
    │   └── search-data.js              # Índice con los 94 términos
    │
    └── [páginas HTML]
        ├── fundamentos.html            # 13 términos (#1-13)
        ├── modelos.html                # 14 términos (#14-27)
        ├── herramientas.html           # 13 términos (#28-40)
        ├── desarrollo.html             # 14 términos (#41-54)
        ├── seguridad.html              # 14 términos (#55-68)
        ├── servicios.html              # 13 términos (#69-81)
        └── licencias.html              # 13 términos (#82-94)
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con Grid y Flexbox
- **JavaScript Vanilla** - Buscador y navegación (sin frameworks)
- **Python** - Procesamiento del documento Word y generación de archivos

### Características CSS Destacadas
- CSS Grid para layouts adaptativos
- CSS Columns para listados verticales
- Animaciones con `@keyframes`
- Media queries para responsive design
- Variables CSS para colores consistentes

### JavaScript Features
- Event listeners para búsqueda en tiempo real
- Detección de ubicación para rutas dinámicas
- Navegación por teclado (accesibilidad)
- Regex para resaltado de texto

---


## 📖 Guía de Uso

### Para Estudiantes

1. **Navega por categorías** desde la página principal
2. **Usa el buscador** para encontrar términos específicos
3. **Consulta el listado** al inicio de cada página para ver todos los términos
4. **Click en "Más información"** para profundizar en fuentes externas

### Para Docentes

- **Material didáctico completo** con 94 términos clave
- **Enlaces a Wikipedia y documentación oficial** para ampliar
- **Estructura clara** por niveles de dificultad
- **Fácil de compartir** - Solo envía el enlace

---

## 🎨 Paleta de Colores

```css
/* Gradiente principal */
background: linear-gradient(155deg, #e96700, #ed5c74);

/* Colores de acento */
--color-primario: #e96700;        /* Naranja principal */
--color-secundario: #ed5c74;      /* Rosa/Coral */
--color-hover: #d45a00;           /* Naranja oscuro */
--color-highlight: #fce4d6;       /* Naranja claro */
```

---

## 📊 Distribución de Términos por Categoría

| Categoría | Términos | Rango |
|-----------|----------|-------|
| 🧠 Fundamentos de IA y ML | 13 | #1-13 |
| 🔬 Modelos y Técnicas de ML | 14 | #14-27 |
| 🤖 Herramientas de IA Generativa | 13 | #28-40 |
| 💻 Desarrollo y Testing | 14 | #41-54 |
| 🔒 Seguridad y Arquitectura | 14 | #55-68 |
| ☁️ Servicios Cloud y AWS | 13 | #69-81 |
| ⚖️ Licencias y Regulación | 13 | #82-94 |
| **TOTAL** | **94** | - |

---


## 🔍 Funcionamiento del Buscador

### Algoritmo de Búsqueda

1. **Búsqueda en tiempo real** en título y descripción
2. **Priorización por relevancia:**
   - Coincidencia exacta al inicio → Primero
   - Coincidencia en título → Segundo
   - Coincidencia en descripción → Tercero
3. **Limitación a 8 resultados** visibles (+ contador de más)
4. **Navegación inteligente:**
   - Desde `index.html` → Usa ruta absoluta `/modulo_1/pagina.html#term-N`
   - Desde páginas internas → Usa ruta relativa `pagina.html#term-N`

### Tecnología

```javascript
// Índice de búsqueda (search-data.js)
const SEARCH_INDEX_DATA = [
  {
    number: 1,
    title: "Machine Learning",
    description: "Disciplina dentro de la IA...",
    url: "https://...",
    page: "modulo_1/fundamentos.html",
    pageName: "Fundamentos de IA y Machine Learning",
    icon: "🧠"
  },
  // ... 93 términos más
];
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Desktop (por defecto) */
.terms-list { column-count: 3; }

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .terms-list { column-count: 2; }
}

/* Móvil (<768px) */
@media (max-width: 768px) {
  .terms-list { column-count: 1; }
}
```

---

## 🎯 Buenas Prácticas Implementadas

### SEO
- ✅ Títulos descriptivos en cada página
- ✅ Meta tags apropiados
- ✅ URLs limpias y semánticas
- ✅ Favicon personalizado

### Accesibilidad
- ✅ Navegación con teclado
- ✅ Contraste de colores adecuado
- ✅ Enlaces descriptivos
- ✅ Estructura HTML semántica

### Performance
- ✅ CSS minificado
- ✅ Sin dependencias externas pesadas
- ✅ Carga rápida (<1 segundo)
- ✅ Imágenes optimizadas

### UX
- ✅ Feedback visual inmediato
- ✅ Animaciones suaves
- ✅ Navegación intuitiva
- ✅ Diseño consistente

---

## 📝 Notas de Desarrollo

### Proceso de Creación

1. **Extracción de datos** desde documento Word (.docx)
2. **Parsing inteligente** para separar títulos de descripciones
3. **Organización automática** en categorías balanceadas
4. **Generación de HTML** con templates Python
5. **Creación del índice** de búsqueda en JavaScript
6. **Optimización CSS** para diseño responsive
7. **Testing** en múltiples dispositivos y navegadores

### Decisiones de Diseño

**¿Por qué 3 columnas verticales?**
- Optimiza el espacio vertical
- Perfecto para 13-14 términos por página
- Escalable hasta 50+ términos sin scroll excesivo
- Se adapta bien a diferentes tamaños de pantalla

**¿Por qué 7 categorías?**
- Balance perfecto para 94 términos (13-14 por categoría)
- No abruma al usuario
- Fácil de navegar
- Permite crecimiento futuro

**¿Por qué colores naranjas?**
- Identidad corporativa de Fundación Dicampus
- Transmite energía y creatividad
- Alto contraste con el blanco
- Profesional y moderno

---



## 📄 Licencia

Material didáctico desarrollado para **Fundación Dicampus**.  
Todos los derechos reservados © 2026

---

## 👥 Créditos

**Fundación Dicampus**  
Material didáctico - Módulo Introducción a la IA

**Desarrollo y Diseño**  
Webglosario v1.0 - Febrero 2026

**Fuentes de Información**
- Wikipedia en español
- Documentación oficial de tecnologías
- AWS Documentation
- GitHub Documentation

---

## 📞 Contacto

Para más información sobre este material didáctico:
- 🌐 Web: [https://webglosario.netlify.app/](https://webglosario.netlify.app/)
- 🏢 Fundación Dicampus

---

## 🆘 Solución de Problemas

### El buscador no funciona
- **Causa:** JavaScript deshabilitado
- **Solución:** Habilita JavaScript en tu navegador

### Las rutas no cargan
- **Causa:** Estructura de archivos incorrecta
- **Solución:** Mantén la estructura de carpetas exacta

### El favicon no aparece
- **Causa:** Caché del navegador
- **Solución:** Refresca con Ctrl+F5 o limpia caché

### Las columnas no se ven bien
- **Causa:** Navegador muy antiguo
- **Solución:** Actualiza a Chrome, Firefox, Safari o Edge modernos

---

## 📚 Recursos Adicionales

### Para Estudiantes
- Todos los enlaces "Más información" llevan a fuentes verificadas
- Wikipedia en español para términos generales
- Documentación oficial para tecnologías específicas

### Para Desarrolladores
- Código limpio y comentado
- Estructura modular y escalable
- Fácil de mantener y ampliar

---

## ✅ Checklist de Despliegue

Antes de subir a producción:

- [x] Verificar todos los enlaces
- [x] Probar el buscador desde todas las páginas
- [x] Validar HTML (sin errores)
- [x] Optimizar imágenes
- [x] Comprobar responsive en móvil
- [x] Testear en diferentes navegadores
- [x] Verificar favicon
- [x] Revisar ortografía
- [x] Confirmar colores corporativos

---

**Última actualización:** Febrero 2026 
**Versión:** 1.0 - Módulo 1 (94 términos)

---

<div align="center">

### 🎓 Material Didáctico de Calidad

**94 términos · 7 categorías · 1 objetivo: Aprender IA**

[Ver Demo](https://webglosario.netlify.app/) | [Reportar Issue](#) | [Sugerir Término](#)

</div>