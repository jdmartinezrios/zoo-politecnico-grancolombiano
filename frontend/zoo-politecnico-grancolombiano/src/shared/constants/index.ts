export const endpoints = {
  authentication: {
    login: '/login',
  },
  users: {
    get: '/users',
    create: '/users',
    delete: '/users/:id',
  },
  animals: {
    get: '/animals',
    create: '/animals',
    delete: '/animals/:id',
  },
  reports: {
    get: '/reports',
    create: '/reports',
    delete: '/reports/:id',
  },
  attentions: {
    get: '/attentions',
    create: '/attentions',
    delete: '/attentions/:id',
  },
};

export const urls = {
  login: '/',
  users: '/usuarios',
  animals: '/animales',
  reports: '/reportes',
  dashboard: '/dashboard',
  attentions: '/atenciones',
};

export const delayNavigation = 3000;
export const defaultPaginationPageSize = 5;
export const messages = {
  users: {
    success: 'Usuario creado con exito',
    error: 'Error al crear usuario',
  },
  animals: {
    success: 'Animal creado con exito',
    error: 'Error al crear animal',
  },
  reports: {
    success: 'Reporte creado con exito',
    error: 'Error al crear reporte',
  },
  attentions: {
    success: 'Consulta medica creada con exito',
    error: 'Error al crear consulta medica',
  },
  delete: {
    success: 'El dato se elimino correctamente',
    error: 'Error al eliminar el dato',
  },
};

export const email_validation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
