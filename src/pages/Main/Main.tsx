import Button from '@components/Button';
import Container from '@components/Container';
import Input from '@components/Input';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const user = localStorage.getItem('user');
  return (
    <Container>
      <h1>
        메인 페이지 -{' '}
        {user ? (
          <span style={{ color: 'green' }}>로그인했습니다</span>
        ) : (
          <span style={{ color: 'red' }}>로그인 안 되어 있음</span>
        )}
      </h1>

      <Button>아하</Button>

      <Input />

      <h2>
        <Link to={'/signup'}>회원가입 페이지</Link>
      </h2>

      <h2>
        <Link to={'/login'}>로그인 페이지</Link>
      </h2>

      <h2>
        <Link to={'/mypage'}>마이 페이지</Link>
      </h2>
    </Container>
  );
};

export default Main;
