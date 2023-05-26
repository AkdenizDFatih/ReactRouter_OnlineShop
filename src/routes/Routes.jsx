import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalog from '../components/Catalog/index.jsx'
import LoginPage from '../components/Authentication/LoginPage.jsx'
import Cart from '../components/Cart/index.jsx'
import Layout from './Layout.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import RegisterPage from '../components/Authentication/RegisterPage.jsx'
import ValidationPage from '../components/Authentication/ValidationPage.jsx'
import NotFound from './NotFound.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Catalog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register">
            <Route index element={<RegisterPage />} />
            <Route path="validation" element={<ValidationPage />} />
          </Route>

          <Route path="" element={<ProtectedRoutes />}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
