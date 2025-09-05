# Blueprint: Analizador de Vulnerabilidad para Gestión de Riesgos

## Visión General

Este documento describe la arquitectura y el plan de desarrollo para una aplicación web diseñada para el **análisis de vulnerabilidad y la gestión de riesgos**.

El objetivo es crear una herramienta intuitiva y moderna que permita a los usuarios identificar, analizar y gestionar factores de riesgo para construir operaciones y comunidades más resilientes.

La aplicación se construye sobre un stack tecnológico moderno con **React**, **Vite**, **Redux Toolkit**, **Material-UI** y **redux-persist**.

---

## Arquitectura y Patrones de Diseño

- **Componentes Refactorizados**: Los componentes `Contexto.jsx` y `Vulnerabilidad.jsx` han sido refactorizados para usar `react-hook-form`, mejorando el rendimiento y la mantenibilidad.
- **Renderizado Basado en Datos**: Los formularios se generan dinámicamente a partir de arrays de configuración, haciendo los componentes más declarativos y fáciles de extender.
- **Separación de Incumbencias**: La configuración de los formularios (`formFields`) se ha externalizado a archivos dedicados en el directorio `src/data`, desacoplando la estructura de los datos de la lógica de la interfaz de usuario.

---

## Funcionalidades Implementadas

### 1. Caracterización del Contexto

- **Descripción**: Permite al usuario definir la entidad a analizar. Los datos son persistentes entre sesiones.
- **Componente**: `src/pages/views/Contexto.jsx`
- **Gestión de Estado**: `src/store/slices/contextSlice.js`
- **Configuración de Formulario**: `src/data/contextoFormFields.js`
- **UI/UX**: Se ha mejorado el layout del formulario para una mejor experiencia de usuario, organizando los campos en una grilla responsive: la descripción ocupa el ancho completo y los demás campos se agrupan en filas de tres.

### 2. Gestión de Vulnerabilidades

- **Descripción**: Permite al usuario definir y calificar los factores de vulnerabilidad internos o externos que afectan a la entidad.
- **Componente**: `src/pages/views/Vulnerabilidad.jsx`
- **Gestión de Estado**: `src/store/slices/vulnerabilitySlice.js`
- **Configuración de Formulario**: `src/data/vulnerabilidadFormFields.js`

### 3. Gestión de Amenazas

- **Descripción**: Permite al usuario identificar y registrar las amenazas que podrían explotar las vulnerabilidades. Se pueden asociar múltiples vulnerabilidades a cada amenaza.
- **Componente**: `src/pages/views/Amenazas.jsx`
- **Gestión de Estado**: `src/store/slices/threatSlice.js`
- **Configuración de Formulario**: `src/data/amenazaFormFields.js`

---

## Plan de Acción Actual

El siguiente gran objetivo es el desarrollo de la sección de **Reportes**. Esta vista consolidará toda la información recopilada (Contexto, Vulnerabilidades y Amenazas) para presentar un análisis de riesgo visual e interactivo.
