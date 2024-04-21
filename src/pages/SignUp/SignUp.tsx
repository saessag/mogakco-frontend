import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <h1>회원가입 페이지</h1>

      <h2>
        <Link to={'/'}>메인으로 돌아가기</Link>
      </h2>
    </div>
  );
};

export default SignUp;
