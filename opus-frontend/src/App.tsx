import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './pages/landing-page';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import Dashboard from './pages/dashboard';
import Overview from './pages/overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
