import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Comic from './pages/Comic'
import Cart from './pages/Cart'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
)

export default Rotas
