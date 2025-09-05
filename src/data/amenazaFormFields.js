export const threatTypes = [
  'Cibernética',
  'Natural',
  'Humana',
  'Operacional',
  'Regulatoria',
  'Financiera',
];

export const formFields = [
  {
    name: 'nombre',
    label: 'Nombre de la Amenaza',
    type: 'text',
    required: true,
  },
  {
    name: 'descripcion',
    label: 'Descripción',
    type: 'text',
    multiline: true,
    rows: 4,
  },
  {
    name: 'tipo',
    label: 'Tipo de Amenaza',
    type: 'select',
    options: threatTypes,
    required: true,
  },
  {
    name: 'ids_vulnerabilidades_asociadas',
    label: 'Vulnerabilidades Asociadas',
    type: 'multiselect',
    options: [], // This will be populated dynamically from the state
    required: true,
  },
];
