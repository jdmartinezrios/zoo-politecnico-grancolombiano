import { IAttention } from '../../../../../shared/models/attentions';

export const transformAttentions = (attentions: IAttention[]) => {
  return attentions?.map((attetion) => {
    return {
      key: attetion.id,
      id: attetion.id,
      carer: attetion.user.fullname,
      animal: attetion.animal.name,
      specie: attetion.animal.specie,
      description: attetion.description,
    } as DataTable;
  });
};

export type DataTable = {
  key: React.Key;
  id: number;
  carer: string;
  animal: string;
  specie: string;
  description: string;
};
