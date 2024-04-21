import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MyPage from './MyPage';
import Main from './Main';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';

// make <Route /> properties
/**
 * 로그인 여부와 상관 없이 접근 가능한 페이지
 */
const publicRoutes = [{ path: '/', element: <Main /> }];

/**
 * 로그인 해야 접근 가능한 페이지 privateRoutes
 */
const privateRoutes = [{ path: '/mypage', element: <MyPage /> }];

/**
 * 로그인 하면 접근 못 하는(제한된) 페이지
 * TODO: restricted 라는 단어가 적절한지 모르겠음
 */
const restrictedRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
];

const NotFound = () => {
  return (
    <div>
      <h2>경로에 없는 페이지입니다.</h2>
      <h2>
        <Link to={'/'}>메인으로</Link>
      </h2>
    </div>
  );
};

// TODO: add ErrorBoundary 요류 처리?
const appRoutes = () => {
  return (
    <Routes>
      {/* 공통 루트 */}
      {publicRoutes.map(route => (
        <Route path={route.path} element={route.element} />
      ))}
      {/* 접근 제한 루트 */}
      <Route element={<RestrictedRoute />}>
        {restrictedRoutes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Route>
      {/* 사용자 루트 */}
      <Route element={<PrivateRoute />}>
        {privateRoutes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Route>
      {/* 루트에 없는 경로로 접근할 경우 */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default appRoutes;
