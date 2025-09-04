# Blueprint: Vulnerability Assessment Tool

## Visión General

Esta aplicación es una herramienta de evaluación de vulnerabilidades diseñada para ser una interfaz moderna, intuitiva y fácil de usar. El objetivo es proporcionar una experiencia de usuario fluida y receptiva para analizar y reportar vulnerabilidades de seguridad.

La aplicación se está construyendo con React y Material-UI, siguiendo las mejores prácticas de desarrollo, incluyendo un diseño limpio, enrutamiento robusto y un `Layout` profesional.

## Esquema del Proyecto

Esta sección documenta el diseño, el estilo y las características implementadas en la aplicación.

### 1. Estructura del Proyecto y Configuración

*   **Framework**: React con Vite para un desarrollo rápido y moderno.
*   **Librería de Componentes**: Material-UI (MUI) para un diseño consistente y profesional basado en Material Design.
*   **Estilos**: Se utiliza `styled` de MUI para crear componentes estilizados y encapsulados, asegurando un bajo acoplamiento y alta reutilización.

### 2. Diseño y Layout Principal (`Layout.jsx`)

El `Layout` es la estructura visual principal para las secciones de trabajo de la aplicación.

*   **Componente `Header.jsx`**: Una barra de aplicación superior fija que contiene:
    *   El título de la aplicación.
    *   Un botón de menú (icono de hamburguesa) para controlar la visibilidad del `SideNav`.
    *   Un botón de `Home` (icono de casa) a la derecha para permitir una navegación rápida a la página de inicio.
*   **Componente `SideNav.jsx`**: Un panel de navegación lateral persistente (`Drawer`) que se puede expandir o colapsar.
    *   **Contenido**: Contiene los enlaces de navegación principales a las diferentes herramientas de la aplicación (Vulnerabilidad, Amenazas, Reporte).
    *   **Interactividad**: El panel se expande al hacer clic en un ítem cuando está colapsado y se cierra mediante un botón de chevron.
*   **Componente `Footer.jsx`**:
    *   **Integrado en el `SideNav`**: Se encuentra anclado en la parte inferior del `Drawer`, manteniendo la interfaz principal limpia.
    *   Muestra información de copyright y solo es visible cuando el `SideNav` está expandido.

### 3. Gestión de Estado con Redux Toolkit

Para manejar el estado global de la aplicación de una manera predecible y centralizada, se ha implementado Redux Toolkit.

*   **Store Centralizado**: Se ha configurado un único `store` (`src/store/store.js`) que sirve como la fuente de verdad para toda la aplicación.
*   **Slice de UI (`uiSlice.js`)**: El primer *slice* gestiona todo el estado relacionado con la interfaz de usuario.
    *   **Estado**: Actualmente, gestiona `isSideNavOpen` (un booleano) para controlar si el panel de navegación lateral está abierto o cerrado.
    *   **Acciones**: Expone *reducers* puros (`openSideNav`, `closeSideNav`, `toggleSideNav`) para modificar el estado de forma segura.
*   **Integración con React**: La aplicación está envuelta en un componente `Provider` (`src/main.jsx`) que hace que el `store` de Redux esté disponible para todos los componentes.
*   **Conexión de Componentes**: Los componentes como `Layout`, `Header` y `SideNav` utilizan los hooks `useSelector` (para leer el estado) y `useDispatch` (para despachar acciones), eliminando la necesidad de pasar estado a través de `props` (prop drilling).

### 4. Enrutamiento y Navegación

El enrutamiento está diseñado para ser intuitivo y escalable.

*   **`AppRouter.jsx`**: Gestiona todas las rutas de la aplicación.
*   **Ruta principal (`/`)**: Dirige a la página de inicio (`Home`).
*   **Ruta de trabajo (`/work`)**:
    *   Utiliza el `Layout` principal para mostrar el `Header` y el `SideNav`.
    *   Implementa **rutas anidadas** para las diferentes herramientas.
    *   **Ruta por defecto**: Al navegar a `/work`, se muestra automáticamente la vista `Vulnerabilidad`.
*   **Vistas Anidadas**:
    *   `Vulnerabilidad` (`/work/vulnerabilidad`)
    *   `Amenazas` (`/work/amenazas`)
    *   `Reporte` (`/work/reporte`)
*   **Navegación**: Los enlaces en el `SideNav` y el `Header` utilizan el componente `Link` de `react-router-dom` para una navegación rápida del lado del cliente sin recargar la página.

### 5. Componentes y Vistas

*   **`Home.jsx`**: Página de bienvenida con un diseño atractivo y un llamado a la acción claro para que el usuario comience a trabajar.
*   **`WorkPage.jsx`**: Una vista de marcador de posición que renderiza las sub-rutas anidadas.
*   **Vistas de Herramientas** (`Vulnerabilidad`, `Amenazas`, `Reporte`): Componentes de marcador de posición listos para ser desarrollados.

## Plan de Acción Actual

*   **Próximo Paso**: Definir e implementar el `slice` de Redux para gestionar los datos de las vulnerabilidades. Esto incluirá el estado para la lista de vulnerabilidades, el estado de carga y los posibles errores.