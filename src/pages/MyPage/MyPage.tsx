import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h1>마이 페이지</h1>

      <h2>
        <Link to={'/'}>메인으로 돌아가기</Link>
      </h2>

      <button
        onClick={logout}
        style={{ background: 'red', padding: '10px', color: 'white' }}
      >{`로그아웃(localstorage에 user 제거)`}</button>
    </div>
  );
};

export default MyPage;
