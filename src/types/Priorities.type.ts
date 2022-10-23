export const PrioritiesTypes = Object.freeze ({
  APLAZABLE: 1,
  PENDIENTE: 2,
  URGENTE: 3,
  CRITICO: 4,
});

export type PrioritiesType = typeof PrioritiesTypes[keyof typeof PrioritiesTypes];