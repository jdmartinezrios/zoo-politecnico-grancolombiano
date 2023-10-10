import { ReportsService } from './domain';
import { Report } from '../../shared/models/report';
import { IReport } from '../../shared/interfaces';
import { User } from '../../shared/models/user';
import { Animal } from '../../shared/models/animal';

export class ReportsServiceImpl extends ReportsService {
  public async createReport(report: IReport): Promise<Report> {
    const newReport = await Report.create({ ...report });
    return newReport;
  }

  public async getAllReports(): Promise<Report[]> {
    const reports = await Report.findAll({
      order: [['created_at', 'DESC']],
      include: [
        { model: Animal, as: 'animal' },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
      ],
      attributes: { exclude: ['user_id', 'animal_id'] },
    });
    return reports;
  }

  public async deleteReport(reportId: number): Promise<unknown> {
    const deletedAttention = await Report.destroy({ where: { id: reportId } });
    return deletedAttention;
  }
}
