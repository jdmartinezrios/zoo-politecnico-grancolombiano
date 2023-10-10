import { Router, Request, Response } from 'express';
import { ReportsServiceImpl } from './reports.service';
import { ReportsService } from './domain';
import { IReport } from '../../shared/interfaces';
import { HTTP_STATUS } from '../../shared/constants';
import { ResponsetError } from '../../shared/response.error';

export class ReportsController {
  private static reportsService: ReportsService = new ReportsServiceImpl();

  public static route(router: Router): Router {
    router.get('/reports', this.getAllReports.bind(this));
    router.post('/reports', this.createReport.bind(this));
    router.delete('/reports/:id', this.deleteReport.bind(this));
    return router;
  }

  private static async getAllReports(_req: Request, res: Response): Promise<void> {
    try {
      const reports = await this.reportsService.getAllReports();
      res.json(reports);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async createReport(req: Request, res: Response): Promise<void> {
    try {
      const report = await this.reportsService.createReport(req.body as IReport);
      res.json(report);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async deleteReport(req: Request, res: Response): Promise<void> {
    const { id: reportId } = req.params;
    try {
      const animal = await this.reportsService.deleteReport(Number(reportId));
      res.json(animal);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }
}
