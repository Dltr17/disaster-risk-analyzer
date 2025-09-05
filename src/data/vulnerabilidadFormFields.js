
export const vulnerabilityTypes = [
  'Física',
  'Operacional',
  'Financiera',
  'Social',
  'Ambiental',
  'Tecnológica',
];

export const formFields = [
  {
    name: 'nombre',
    label: 'Nombre de la Vulnerabilidad',
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
    label: 'Tipo',
    type: 'select',
    options: vulnerabilityTypes,
    required: true,
  },
  {
    name: 'calificacion',
    label: 'Calificación (1-5)',
    type: 'slider',
    defaultValue: 1,
    step: 1,
    min: 1,
    max: 5,
  },
];
