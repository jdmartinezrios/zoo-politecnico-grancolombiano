import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  Loader,
  SelectOptions,
  TextArea,
} from '../../../../components';
import useUsers from '../../../Users/hooks/useUsers';
import useAnimals from '../../../Animals/hooks/useAnimals';
import { transformAnimals, transformUsers } from '../../../../utils/core';
import useAddAttention from '../../hooks/useAddAttention';
import {
  IAttention,
  IAttentionInputs,
} from '../../../../shared/models/attentions';

type Props = {
  attention?: IAttention;
};

const AddAttentionForm: FC<Props> = () => {
  const { register, handleSubmit, formState } = useForm<IAttentionInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { users } = useUsers();
  const { animals } = useAnimals();

  const { isLoading, handleAddAttention } = useAddAttention();

  const carerOptions = transformUsers(users);
  const animalOptions = transformAnimals(animals);

  const onSubmit: SubmitHandler<IAttentionInputs> = (inputs) => {
    handleAddAttention({ payload: { ...inputs } });
  };

  const errors = Object.keys(formState.errors);
  const disabled = !formState.isValid || !!errors.length;

  return (
    <>
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
      >
        <SelectOptions
          placeholder="Cuidador"
          {...register('user_id', {
            required: 'Este campo es obligatorio',
          })}
          options={carerOptions}
          id="user_id"
        />
        <SelectOptions
          placeholder="Animal"
          {...register('animal_id', {
            required: 'Este campo es obligatorio',
          })}
          options={animalOptions}
          id="animal_id"
        />
        <TextArea
          placeholder="Descripción"
          {...register('description', {
            required: 'Este campo es obligatorio',
          })}
          id="description"
        />
        <div id="separator"></div>

        <Button disabled={disabled}>
          <span>Registrar</span>
        </Button>
      </form>
    </>
  );
};

export default AddAttentionForm;
