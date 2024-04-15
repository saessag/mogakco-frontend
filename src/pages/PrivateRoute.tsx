import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 *
 * 사용자가 로그인해야 접근 가능한 루트
 */
const PrivateRoute = () => {
  // TODO: 사용자 로그인 여부를 판별하는 로직 추가해야 함
  // 예를 들어 localStorage.getItem('user')로 로그인 했는지 확인
  const user = localStorage.getItem('user');

  return user ? ( // 만약 사용자가 있다면(로그인했다면)
    <Outlet /> // 하위 자식 Route로 이동
  ) : (
    <Navigate to={'/login'} /> // 없으면 로그인 페이지로 이동
  );
};

export default PrivateRoute;
