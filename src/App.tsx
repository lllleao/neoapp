import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle from './styles'
import Rotas from './routes'
import { Provider } from 'react-redux'
import store from './store'
import Footer from './components/Footer'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Rotas />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App
