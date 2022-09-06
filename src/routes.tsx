import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Update } from './pages/Update';

export const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};
