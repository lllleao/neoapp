import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Rotas from './routes'
import GlobalStyle from './styles'
import store from '@/store'

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
