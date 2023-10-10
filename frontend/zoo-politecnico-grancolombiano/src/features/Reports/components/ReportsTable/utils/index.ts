import { IReport } from '../../../../../shared/models/reports';
import { formatDate } from '../../../../../utils/core';

export const transformReports = (reports: IReport[]) => {
  return reports?.map((report) => {
    return {
      key: report.id,
      id: report.id,
      carer: report.user.fullname,
      animal: report.animal.name,
      specie: report.animal.specie,
      create_at: formatDate(report.createdAt),
    } as DataTable;
  });
};

export type DataTable = {
  key: React.Key;
  id: number;
  carer: string;
  animal: string;
  specie: string;
  create_at: string;
};
