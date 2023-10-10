import { IReport } from '../../../shared/interfaces';
import { Report } from '../../../shared/models/report';

export abstract class ReportsService {
  abstract getAllReports(): Promise<Report[]>;
  abstract createReport(report: IReport): Promise<Report>;
  abstract deleteReport(reportId: number): Promise<unknown>;
}
