import Home from './components/home/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetail from './components/card/card-detail/CardDetail'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={
            <ProtectedRoute>
              <>
                <Navbar/>
                <Home/>
              </>
            </ProtectedRoute>
          }/>
          <Route path='/home' element={
            <ProtectedRoute>
              <>
                <Navbar/>
                <Home/>
              </>
            </ProtectedRoute>
          }/>
          <Route path='/card-detail/:id' element={
            <ProtectedRoute>
              <>
                <Navbar/>
                <CardDetail/>
              </>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
