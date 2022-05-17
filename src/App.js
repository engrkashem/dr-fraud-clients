import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shares/Navbar/Navbar';

function App() {
  return (
    <div className='md:px-16 max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
