
import { Route, Routes } from 'react-router-dom'
import './App.css'

// user
import Home from './User/Pages/Home'
import Profile from './User/Pages/Profile'
import Contact from './User/Pages/Contact'
import View from './User/Pages/View'
import Books from './User/Pages/Books'

// admin
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResources from './Admin/Pages/AdminResources'
import AdminSettings from './Admin/Pages/AdminSettings'

// common pages
import Auth from './Pages/Auth'
import Pnf from './Pages/Pnf'

// common components
import Preloader from './Components/Preloader'
import Footer from './Components/Footer'
import { useContext, useState } from 'react'
import PaymentSuccess from './User/Pages/PaymentSuccess'
import PaymentFail from './User/Pages/PaymentFail'
import { routeContext } from './contextAPI/RouteGuard'




function App() {
  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)

  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)
  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <Preloader /> : <Home />} />
        <Route path='/contact' element=<Contact /> />
        <Route path='/login' element=<Auth /> />
        <Route path='/register' element={<Auth insideRegister />} />


        {
          role == "user" &&
          <>
          <Route path='/profile/:id' element=<Profile /> />
        <Route path='/books' element=<Books /> />
        <Route path='/books/:id' element=<View /> />
        <Route path='success' element=<PaymentSuccess /> />
        <Route path='failed' element=<PaymentFail /> />
          </>
        }



        {
          role == "admin" &&
          <>
          <Route path='/admin' element=<AdminDashboard /> />
        <Route path='/adminresources' element=<AdminResources /> />
        <Route path='/adminsettings' element=<AdminSettings /> />
          </>
        }

        <Route path='*' element=<Pnf /> />

      </Routes>
      <Footer />
    </>
  )
}

export default App
