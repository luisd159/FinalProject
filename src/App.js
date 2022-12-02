import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Route,
  Routes,
  Outlet, Link
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
