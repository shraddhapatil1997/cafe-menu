import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AccessProvider, useAccess } from './context/AccessContext'
import Navigation from './components/Navigation'
import MenuPage from './pages/MenuPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ConfirmationPage from './pages/ConfirmationPage'
import ScanPage from './pages/ScanPage'
import './App.css'

function AutoUnlock({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { unlocked, grantAccess } = useAccess()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('access') === '1' && !unlocked) {
      grantAccess()
      navigate('/', { replace: true })
    }
  }, [location.search, unlocked, grantAccess, navigate])

  return children
}

function ProtectedRoute({ children }) {
  const location = useLocation()
  const { unlocked } = useAccess()

  if (!unlocked) {
    return <Navigate to="/scan" state={{ from: location }} replace />
  }

  return children
}

export default function App() {
  return (
    <AccessProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AutoUnlock>
            <Navigation />
            <main>
              <Routes>
                <Route path="/scan" element={<ScanPage />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <MenuPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <CheckoutPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/confirmation"
                  element={
                    <ProtectedRoute>
                      <ConfirmationPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </AutoUnlock>
        </BrowserRouter>
      </CartProvider>
    </AccessProvider>
  )
}
