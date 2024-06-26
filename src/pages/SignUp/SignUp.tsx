import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputControl } from '@components/Input';
import Button from '@components/Button';

// TODO: 각 필드 validation regex 추가
const schema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '올바른 이메일 형식이 아닙니다.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
  name: z.string().min(2, { message: '이름을 입력해주세요.' }),
  nickname: z.string().min(2, { message: '닉네임을 입력해주세요.' }),
});

type Schema = z.infer<typeof schema>;

const SignUp = () => {
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
      name: '',
      nickname: '',
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = data => {
    alert(JSON.stringify(data));
    // TODO
    // try => navigate('/이메일 코드 입력?')
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
        회원가입
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

        <InputControl
          $fullWidth
          $label='이름'
          $inputProps={{
            ...register('name'),
            id: 'name',
            type: 'name',
            autoComplete: 'username',
          }}
          $error={!!errors.name}
          $helperText={errors.name?.message || undefined}
        />

        <InputControl
          $fullWidth
          $label='닉네임'
          $inputProps={{
            ...register('nickname'),
            id: 'nickname',
            type: 'nickname',
            autoComplete: 'username',
          }}
          $error={!!errors.nickname}
          $helperText={errors.nickname?.message || undefined}
        />

        <Button
          type='submit'
          disabled={!isDirty || !isValid || isSubmitting}
          $size='large'
        >
          회원가입
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignUp;
