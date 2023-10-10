export type DashboardOptions = {
  [key: string]: { content: string; path: string }[];
};

export const options: DashboardOptions = {
  ADMIN: [
    { content: 'Gestionar Usuarios', path: '/usuarios' },
    { content: 'Gestionar Animales', path: '/animales' },
  ],
  CARER: [
    { content: 'Gestionar Animales', path: '/animales' },
    { content: 'Gestionar Reportes', path: '/reportes' },
    { content: 'Gestionar Atenciones', path: '/atenciones' },
  ],
};
