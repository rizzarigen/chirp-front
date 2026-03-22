import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import ErrorPage from "./pages/ErrorPage.tsx"
import MainPage from './pages/MainPage.tsx'

function App() {
  return (
    <div className='bg-bground w-screen h-dvh'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App