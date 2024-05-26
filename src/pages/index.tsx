import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MyPage from './MyPage';
import Main from './Main';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';

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
      <Route path='/'>
        <Route index element={<Main />} />

        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/mypage' element={<MyPage />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default appRoutes;
