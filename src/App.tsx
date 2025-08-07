import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle from './styles'
import Rotas from './routes'
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Rotas />
            </BrowserRouter>
        </Provider>
    )
}

export default App
