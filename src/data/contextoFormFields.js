export const formFields = [


  // --- Fila 2: Tres Campos ---
  { name: 'nombre', label: 'Nombre de la Empresa', gridProps: { xs: 12, md: 4 } },
  { name: 'sector', label: 'Sector', gridProps: { xs: 12, md: 4 } },
  { name: 'nombre_contacto', label: 'Nombre del Contacto', gridProps: { xs: 12, md: 4 } },

  // --- Fila 3: Tres Campos ---
  { name: 'cargo_contacto', label: 'Cargo del Contacto', gridProps: { xs: 12, md: 4 } },
  { name: 'email_contacto', label: 'Email del Contacto', type: 'email', gridProps: { xs: 12, md: 4 } },
  { name: 'telefono_contacto', label: 'Teléfono del Contacto', gridProps: { xs: 12, md: 4 } },
  
  // --- Fila 4: Tres Campos ---
  { name: 'direccion', label: 'Dirección', gridProps: { xs: 12, md: 4 } },
  { name: 'ciudad', label: 'Ciudad', gridProps: { xs: 12, md: 4 } },
  { name: 'pais', label: 'País', gridProps: { xs: 12, md: 4 } },
    // --- Fila 1: Descripción (Ancho Completo) ---
    {
      name: 'descripcion',
      label: 'Descripción de la Entidad',
      gridProps: { xs: 12 }, // Ocupa todo el ancho
      multiline: true,
      rows: 5,
    },
];
