import { FC } from 'react';
import { IUser, IUserInputs } from '../../../../shared/models/user';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, InputText, Loader } from '../../../../components';
import InputSelect from '../../../../components/InputSelect/indext';
import { roles } from './utils';
import useAddUser from '../../hooks/useAddUser';
import { email_validation } from '../../../../shared/constants';

type Props = {
  user?: IUser;
};

const AddUserForm: FC<Props> = () => {
  const { register, handleSubmit, formState } = useForm<IUserInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { isLoading, handleAddUser } = useAddUser();

  const onSubmit: SubmitHandler<IUserInputs> = (inputs) => {
    handleAddUser({ payload: { ...inputs } });
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
        <InputText
          placeholder="Correo"
          {...register('email', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: email_validation,
              message: 'El correo no es válido',
            },
          })}
          type="text"
          id="email"
        />
        <InputText
          placeholder="Nombre Completo"
          {...register('fullname', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
          id="fullname"
        />
        <InputSelect
          placeholder="Rol"
          {...register('role', {
            required: 'Este campo es obligatorio',
          })}
          options={roles}
          id="role"
        />
        <InputText
          placeholder="Contraseña"
          {...register('password', {
            required: 'Este campo es obligatorio',
          })}
          type="password"
          id="password"
        />

        <Button disabled={disabled}>
          <span>Registrar</span>
        </Button>
      </form>
    </>
  );
};

export default AddUserForm;
