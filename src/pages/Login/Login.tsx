import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('user', JSON.stringify(true));
    navigate('/');
  };

  return (
    <div>
      <h1>로그인 페이지</h1>

      <h2>
        <Link to={'/'}>메인으로 돌아가기</Link>
      </h2>

      <button
        onClick={login}
        style={{ background: 'blue', padding: '10px', color: 'white' }}
      >{`로그인(loacalStorage에 user 만듦)`}</button>
    </div>
  );
};

export default Login;
