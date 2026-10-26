import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CarDetail from './components/cars/CarDetail'
import RegisterPage from './pages/RegisterPage'
import AdminLayout from './layout/AdminLayout'
import UserAdminList from './pages/admin/UserAdminList'
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './middleware/PrivateRoute'
import CarList from './pages/admin/CarList'
import GalleristListAdmin from './pages/admin/GalleristListAdmin'
import GalleristCarListAdmin from './pages/admin/GalleristCarListAdmin'
import CustomerAdminList from './pages/admin/CustomerAdminList'
import AdminCarDetail from './pages/admin/AdminCarDetail'

function App() {

  return (
    <AuthProvider>
       <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/car-detail/:id' element={<CarDetail/>}/>
          <Route path='/admin' element={
            <PrivateRoute>
             <AdminLayout/>
            </PrivateRoute>
          }>
            <Route index element={<Navigate to="users" replace/>}/>
            <Route path='users' element={<UserAdminList/>}/>
            <Route path='cars' element={<CarList />} /> 
            <Route path='car-detail/:id' element={<AdminCarDetail/>}/>
            <Route path='gallerist' element={<GalleristListAdmin/>}/>
            <Route path='galleristcar' element={<GalleristCarListAdmin/>}/>
            <Route path='customers' element={<CustomerAdminList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
   
  )
}

export default App
