export const scoreOptions = [
  { label: 'Cumple', value: 1 },
  { label: 'No Cumple', value: 0 },
  { label: 'No Aplica', value: 0.5 },
];

export const vulnerabilityMatrix = [
  {
    tipo: 'Personas',
    subtipos: [
      {
        nombre: 'Gestión Organizacional',
        enunciados: [
          {
            id: 'p-go-1',
            texto:
              'Falta de roles y responsabilidades claros en situaciones de emergencia.',
          },
          {
            id: 'p-go-2',
            texto: 'Carencia de un comité de gestión de riesgos y desastres.',
          },
          {
            id: 'p-go-3',
            texto:
              'Políticas de seguridad y salud ocupacional desactualizadas.',
          },
        ],
      },
      {
        nombre: 'Capacitación y Entrenamiento',
        enunciados: [
          {
            id: 'p-ce-1',
            texto: 'Ausencia de simulacros de evacuación anuales.',
          },
          {
            id: 'p-ce-2',
            texto:
              'Personal no capacitado en primeros auxilios y uso de extintores.',
          },
          {
            id: 'p-ce-3',
            texto: 'Falta de programas de concientización sobre riesgos.',
          },
        ],
      },
      {
        nombre: 'Características de Seguridad',
        enunciados: [
          { id: 'p-cs-1', texto: 'Ausencia de brigadas de emergencia.' },
          {
            id: 'p-cs-2',
            texto:
              'No hay personal de seguridad capacitado en respuesta a crisis.',
          },
          {
            id: 'p-cs-3',
            texto: 'Falta de señalización adecuada para rutas de evacuación.',
          },
        ],
      },
    ],
  },
  {
    tipo: 'Recursos',
    subtipos: [
      {
        nombre: 'Suministros',
        enunciados: [
          {
            id: 'r-s-1',
            texto:
              'No hay inventario de suministros de emergencia (agua, botiquines).',
          },
          {
            id: 'r-s-2',
            texto:
              'Almacenamiento inadecuado de materiales inflamables o peligrosos.',
          },
          {
            id: 'r-s-3',
            texto:
              'Falta de un plan para garantizar la continuidad de la cadena de suministro.',
          },
        ],
      },
      {
        nombre: 'Edificaciones',
        enunciados: [
          {
            id: 'r-e-1',
            texto: 'Estructura no cumple con normas sismorresistentes.',
          },
          {
            id: 'r-e-2',
            texto: 'Cables eléctricos expuestos y en mal estado.',
          },
          { id: 'r-e-3', texto: 'Salidas de emergencia bloqueadas.' },
        ],
      },
      {
        nombre: 'Equipos',
        enunciados: [
          {
            id: 'r-eq-1',
            texto:
              'Equipos de protección personal (EPP) insuficientes o caducados.',
          },
          {
            id: 'r-eq-2',
            texto:
              'Sistemas de alarma y detección de incendios sin mantenimiento.',
          },
          { id: 'r-eq-3', texto: 'Maquinaria pesada sin anclaje adecuado.' },
        ],
      },
    ],
  },
  {
    tipo: 'Sistemas y Procesos',
    subtipos: [
      {
        nombre: 'Servicios',
        enunciados: [
          {
            id: 'sp-s-1',
            texto:
              'Falta de redundancia en servicios críticos (agua, electricidad, internet).',
          },
          {
            id: 'sp-s-2',
            texto:
              'Procedimientos de operación estándar no documentados para emergencias.',
          },
          {
            id: 'sp-s-3',
            texto: 'Ausencia de un sistema de comunicación de alerta temprana.',
          },
        ],
      },
      {
        nombre: 'Sistemas Alternos',
        enunciados: [
          {
            id: 'sp-sa-1',
            texto: 'No hay un centro de datos alterno para respaldo.',
          },
          {
            id: 'sp-sa-2',
            texto: 'Sistemas de telecomunicación alternos no probados.',
          },
          {
            id: 'sp-sa-3',
            texto:
              'Falta de generadores eléctricos de respaldo en buen estado.',
          },
        ],
      },
      {
        nombre: 'Recuperación',
        enunciados: [
          {
            id: 'sp-r-1',
            texto: 'No existe un plan de recuperación de desastres (DRP).',
          },
          {
            id: 'sp-r-2',
            texto:
              'Políticas de respaldo de datos (backups) no implementadas o desactualizadas.',
          },
          {
            id: 'sp-r-3',
            texto:
              'Falta de un equipo de respuesta para la recuperación post-evento.',
          },
        ],
      },
    ],
  },
];
