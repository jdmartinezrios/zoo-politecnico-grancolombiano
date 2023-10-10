import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Loader, SelectOptions } from '../../../../components';
import { IReport, IReportInputs } from '../../../../shared/models/reports';
import useUsers from '../../../Users/hooks/useUsers';
import useAnimals from '../../../Animals/hooks/useAnimals';
import { transformAnimals, transformUsers } from '../../../../utils/core';
import useAddReport from '../../hooks/useAddReport';

type Props = {
  report?: IReport;
};

const AddReportForm: FC<Props> = () => {
  const { register, handleSubmit, formState } = useForm<IReportInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { users } = useUsers();
  const { animals } = useAnimals();

  const { isLoading, handleAddReport } = useAddReport();

  const carerOptions = transformUsers(users);
  const animalOptions = transformAnimals(animals);

  const onSubmit: SubmitHandler<IReportInputs> = (inputs) => {
    handleAddReport({ payload: { ...inputs } });
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

        <Button disabled={disabled}>
          <span>Generar</span>
        </Button>
      </form>
    </>
  );
};

export default AddReportForm;
