import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, InputText, Loader } from '../../../components';
import { IAuthUserInputs } from '../../../shared/models/login';
import useLogin from '../hooks/useLogin';
import { email_validation } from '../../../shared/constants';

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<IAuthUserInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { hasError, isLoading, handleLogin } = useLogin();

  const onSubmit: SubmitHandler<IAuthUserInputs> = (inputs) => {
    handleLogin({ payload: { ...inputs } });
  };

  const errors = Object.keys(formState.errors);
  const disabled = !formState.isValid || !!errors.length;

  return (
    <>
      {isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center align-middle"
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
          placeholder="Contraseña"
          {...register('password', {
            required: 'Este campo es obligatorio',
          })}
          type="password"
          id="password"
        />

        <Button disabled={disabled}>
          <span>Ingresar</span>
        </Button>
        {(!!errors.length || hasError) && (
          <span className="text-red-500 text-center text-xs mt-4">
            Correo o contraseña inválidos
          </span>
        )}
      </form>
    </>
  );
};

export default LoginForm;
