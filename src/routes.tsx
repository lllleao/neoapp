import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Comic from './pages/Comic'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<Comic />} />
    </Routes>
)

export default Rotas
