import Router from './routes/Routes.jsx'
import LoadingSpinner from './components/LoadingSpinner'
import useReloadAuth from './hooks/useReloadAuth.js'

function App() {
  const { isLoading } = useReloadAuth()

  if (isLoading) {
    return <LoadingSpinner />
  } else {
    return <Router />
  }
}

export default App
