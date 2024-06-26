import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputControl } from '@components/Input';
import Button from '@components/Button';

// TODO: 로그인에 얼마나 validation을 추가할지?
const schema = z.object({
  email: z.string().min(1, { message: '이메일을 입력해주세요.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
});

type Schema = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
    reset,
  } = useForm<Schema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = data => {
    alert(JSON.stringify(data));
    // TODO
    // try => navigate('/')
    // catch => reset(data)
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 0',
        width: '350px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '60px',
        }}
      >
        로그인
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        autoComplete='off'
      >
        <InputControl
          $fullWidth
          $label='이메일'
          $inputProps={{
            ...register('email'),
            id: 'email',
            autoComplete: 'email',
          }}
          $error={!!errors.email}
          $helperText={errors.email?.message || undefined}
        />

        <InputControl
          $fullWidth
          $label='비밀번호'
          $inputProps={{
            ...register('password'),
            id: 'password',
            type: 'password',
            autoComplete: 'current-password',
          }}
          $error={!!errors.password}
          $helperText={errors.password?.message || undefined}
        />

        <Button
          type='submit'
          disabled={!isDirty || !isValid || isSubmitting}
          $size='large'
        >
          로그인
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
