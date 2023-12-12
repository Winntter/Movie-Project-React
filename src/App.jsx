import { Routes, Route } from 'react-router-dom' // UL and Li
import './App.css'
import Home from './pages/home'
import Animation from './pages/animation'
import Layout from './components/layout'
import NotFound from './pages/notFound'

function App() {

  return (
    <>
      <Routes className="film-container">
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/animation" element={<Animation />} />
        </Route>
          <Route path="/*" element={<NotFound/>} /> {/* Tudo o quen nao existir de rota usar o * */}
      </Routes>
    </>
  )
}

export default App
