import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PrivateRoute from './PrivateLayout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Help from '../pages/Help';
import Media from '../pages/Media';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={'/'}
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path={'/login'} element={<Login />} />
        <Route
          path={'/about-us'}
          element={
            <PrivateRoute>
              <MainLayout>
                <About />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={'/help'}
          element={
            <PrivateRoute>
              <MainLayout>
                <Help />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={'/media'}
          element={
            <PrivateRoute>
              <MainLayout>
                <Media />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={'/contact'}
          element={
            <PrivateRoute>
              <MainLayout>
                <Contact />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
