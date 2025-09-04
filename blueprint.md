# Blueprint: Analizador de Vulnerabilidad para Gestión de Riesgos

## Visión General

Este documento describe la arquitectura y el plan de desarrollo para una aplicación web diseñada para el **análisis de vulnerabilidad en el contexto de la gestión de riesgos de desastres**.

El objetivo es crear una herramienta intuitiva y moderna que permita a los usuarios (como planificadores, ONG o agencias gubernamentales) identificar, analizar y gestionar factores de vulnerabilidad (social, económica, física, etc.) para construir comunidades más resilientes.

La aplicación se construye sobre un stack tecnológico moderno con **React**, **Vite**, **Redux Toolkit** y **Material-UI**.

## Arquitectura y Diseño Actual

### 1. Estructura del Proyecto

La aplicación sigue una estructura organizada por funcionalidades para facilitar la escalabilidad y el mantenimiento:

```
/src
|-- /components     # Componentes reutilizables (UI, Layout)
|-- /pages          # Vistas principales de la aplicación
|   |-- /work       # Vistas específicas de las herramientas
|-- /router         # Configuración de enrutamiento
|-- /store          # Configuración de Redux (estado global)
|   |-- /slices     # Slices de Redux por funcionalidad
|-- App.jsx         # Componente raíz
|-- main.jsx        # Punto de entrada de la aplicación
```

### 2. Gestión de Estado (Redux)

Se utiliza **Redux Toolkit** para una gestión de estado centralizada y predecible.

*   **`store.js`**: Configura el store principal de Redux.
*   **`uiSlice.js`**: Un *slice* dedicado a gestionar el estado de la interfaz de usuario, como la visibilidad del menú de navegación lateral (`SideNav`). Esto desacopla el estado de la UI de los componentes.

### 3. Diseño y Layout

El diseño de la aplicación es profesional, limpio y consistente.

*   **`Layout.jsx`**: Componente principal que define la estructura visual de las páginas de trabajo. Contiene un `Header`, un `SideNav` y el área de contenido principal.
*   **`Header.jsx`**: Barra de navegación superior. Incluye un botón para mostrar/ocultar el `SideNav`.
*   **`SideNav.jsx`**: Menú de navegación lateral que permite al usuario moverse entre las diferentes herramientas (`Vulnerabilidad`, `Amenazas`, `Reporte`).
*   **`Footer.jsx`**: Pie de página simple.

### 4. Enrutamiento y Navegación

El enrutamiento está gestionado por `react-router-dom` para una experiencia de Single Page Application (SPA).

*   **`AppRouter.jsx`**: Centraliza todas las rutas.
*   **Ruta principal (`/`)**: Muestra la página de bienvenida (`Home.jsx`).
*   **Ruta de trabajo (`/work`)**: Utiliza el `Layout` principal y contiene rutas anidadas para las herramientas. Redirige por defecto a la vista de vulnerabilidad.
*   **Vistas Anidadas**:
    *   `Vulnerabilidad` (`/work/vulnerabilidad`)
    *   `Amenazas` (`/work/amenazas`)
    *   `Reporte` (`/work/reporte`)

### 5. Componentes y Vistas

*   **`Home.jsx`**: Página de bienvenida con un diseño "hero" impactante, presentando el propósito de la herramienta y un claro llamado a la acción.
*   **Vistas de Herramientas**: Las páginas de `Vulnerabilidad`, `Amenazas` y `Reporte` tienen una estructura visual coherente, con un título claro y un área de contenido designada, listas para ser desarrolladas.

## Plan de Acción Actual

*   **Próximo Paso**: Conectar el repositorio local a un repositorio remoto en GitHub y subir la base del proyecto.
*   **Siguiente Paso Funcional**: Implementar el `slice` de Redux para gestionar los datos de **vulnerabilidades de desastres**. Esto incluirá el estado para la lista, el estado de carga y los errores.
