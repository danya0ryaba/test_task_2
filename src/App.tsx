import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'

import './style/global.scss'
import { Error } from './pages/Error/Error'

function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
