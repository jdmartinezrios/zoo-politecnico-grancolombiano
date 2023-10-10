import { createBrowserRouter } from 'react-router-dom';
import {
  Loginpage,
  DashboardPage,
  UsersPage,
  AnimalsPage,
  AddUserPage,
  AddAnimalPage,
  ReportsPage,
  AddReportPage,
  AttentionsPage,
  AddAttentionPage,
} from '../../pages';

export const router = createBrowserRouter([
  { path: '*', element: <Loginpage /> },
  { path: '/', element: <Loginpage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/usuarios', element: <UsersPage /> },
  { path: '/animales', element: <AnimalsPage /> },
  { path: '/reportes', element: <ReportsPage /> },
  { path: '/atenciones', element: <AttentionsPage /> },
  { path: '/nuevo-usuario', element: <AddUserPage /> },
  { path: '/nuevo-animal', element: <AddAnimalPage /> },
  { path: '/nuevo-reporte', element: <AddReportPage /> },
  { path: '/nueva-atencion', element: <AddAttentionPage /> },
]);

export default router;
