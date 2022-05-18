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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReview from './Pages/Dashboard/MyReview';
import TreatmentHistory from './Pages/Dashboard/TreatmentHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequireAdmin/RequireAdmin';

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
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppoinments />}></Route>
          <Route path='my-review' element={<MyReview />} />
          <Route path='history' element={<TreatmentHistory />} />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
