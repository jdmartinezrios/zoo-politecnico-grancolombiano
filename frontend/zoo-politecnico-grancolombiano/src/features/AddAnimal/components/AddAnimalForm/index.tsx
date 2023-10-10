import { FC } from 'react';
import { IAnimal } from '../../../../shared/models/animal';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  InputText,
  Loader,
  SelectOptions,
} from '../../../../components';
import InputSelect from '../../../../components/InputSelect/indext';
import { answers } from './utils';
import useAddAnimal from '../../hooks/useAddAnimal';
import { IAnimalInputs } from '../../../../shared/models/animal';
import useUsers from '../../../Users/hooks/useUsers';
import { transformUsers } from '../../../../utils/core';

type Props = {
  animal?: IAnimal;
};

const AddAnimalForm: FC<Props> = () => {
  const { register, handleSubmit, formState } = useForm<IAnimalInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { users } = useUsers();
  const { isLoading, handleAddAnimal } = useAddAnimal();

  const onSubmit: SubmitHandler<IAnimalInputs> = (inputs) => {
    handleAddAnimal({ payload: { ...inputs } });
  };

  const carerOptions = transformUsers(users);

  const errors = Object.keys(formState.errors);
  const disabled = !formState.isValid || !!errors.length;

  return (
    <>
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
      >
        <InputText
          placeholder="Nombre"
          {...register('name', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
          id="name"
        />
        <InputText
          placeholder="Especie"
          {...register('specie', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
          id="specie"
        />
        <InputText
          placeholder="Habitat"
          {...register('habitat', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
          id="habitat"
        />
        <SelectOptions
          placeholder="Cuidador"
          {...register('user_id', {
            required: 'Este campo es obligatorio',
          })}
          options={carerOptions}
          id="user_id"
        />
        <InputText
          placeholder="Tipo de comida"
          {...register('food_type', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
          id="food_type"
        />
        <InputText
          placeholder="Peso"
          {...register('weight', {
            required: 'Este campo es obligatorio',
          })}
          type="number"
          id="weight"
        />
        <InputSelect
          placeholder="Vacunas"
          {...register('vaccines', {
            required: 'Este campo es obligatorio',
          })}
          options={answers}
          id="vaccines"
        />
        <InputSelect
          placeholder="Alergias"
          {...register('allergies', {
            required: 'Este campo es obligatorio',
          })}
          options={answers}
          id="allergies"
        />
        <InputSelect
          placeholder="Medicinas"
          {...register('medicines', {
            required: 'Este campo es obligatorio',
          })}
          options={answers}
          id="medicines"
        />
        <InputSelect
          placeholder="Aseo animal"
          {...register('animal_grooming_needs', {
            required: 'Este campo es obligatorio',
          })}
          options={answers}
          id="animal_grooming_needs"
        />
        <InputSelect
          placeholder="Aseo habitat"
          {...register('habitat_grooming_needs', {
            required: 'Este campo es obligatorio',
          })}
          options={answers}
          id="habitat_grooming_needs"
        />
        <div id="separator"></div>
        <Button disabled={disabled}>
          <span>Registrar</span>
        </Button>
      </form>
    </>
  );
};

export default AddAnimalForm;
