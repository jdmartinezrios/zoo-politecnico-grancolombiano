import { IAttention } from '../../../shared/interfaces';
import { Attention } from '../../../shared/models/attention';

export abstract class AttentionsService {
  abstract getAllAttentions(): Promise<Attention[]>;
  abstract createAttention(attention: IAttention): Promise<Attention>;
  abstract deleteAttention(attentionId: number): Promise<unknown>;
}
