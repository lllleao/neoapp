import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle from './styles'
// import { BrowserRouter } from 'react-ro'

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
            </BrowserRouter>
        </>
    )
}

export default App
