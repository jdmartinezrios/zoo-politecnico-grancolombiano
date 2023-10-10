import { Router, Request, Response } from 'express';
import { AttentionServiceImpl } from './attentions.service';
import { AttentionsService } from './domain';
import { ResponsetError } from '../../shared/response.error';
import { HTTP_STATUS } from '../../shared/constants';
import { IAttention } from '../../shared/interfaces';

export class AttentionsController {
  private static attentionService: AttentionsService = new AttentionServiceImpl();

  public static route(router: Router): Router {
    router.get('/attentions', this.getAllAttentions.bind(this));
    router.post('/attentions', this.createAttention.bind(this));
    router.delete('/attentions/:id', this.deleteAttention.bind(this));
    return router;
  }

  private static async createAttention(req: Request, res: Response): Promise<void> {
    try {
      const attentions = await this.attentionService.createAttention(
        req.body as IAttention,
      );
      res.json(attentions);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async getAllAttentions(_req: Request, res: Response): Promise<void> {
    try {
      const attentions = await this.attentionService.getAllAttentions();
      res.json(attentions);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }

  private static async deleteAttention(req: Request, res: Response): Promise<void> {
    const { id: attentionId } = req.params;
    try {
      const animal = await this.attentionService.deleteAttention(Number(attentionId));
      res.json(animal);
    } catch (error) {
      const errorMessage = new ResponsetError(error, HTTP_STATUS.BAD_REQUEST);
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorMessage);
    }
  }
}
