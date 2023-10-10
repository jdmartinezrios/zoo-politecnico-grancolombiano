import { IAttention } from '../../shared/interfaces';
import { Animal } from '../../shared/models/animal';
import { Attention } from '../../shared/models/attention';
import { User } from '../../shared/models/user';
import { AttentionsService } from './domain';

export class AttentionServiceImpl extends AttentionsService {
  public async getAllAttentions(): Promise<Attention[]> {
    const attentions = await Attention.findAll({
      order: [['created_at', 'DESC']],
      include: [
        { model: Animal, as: 'animal' },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
      ],
      attributes: { exclude: ['user_id', 'animal_id'] },
    });
    return attentions;
  }

  public async createAttention(attention: IAttention): Promise<Attention> {
    const newAttention = await Attention.create({ ...attention });
    return newAttention;
  }

  public async deleteAttention(attentionId: number): Promise<unknown> {
    const deletedAttention = await Attention.destroy({ where: { id: attentionId } });
    return deletedAttention;
  }
}
