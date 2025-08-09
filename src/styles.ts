import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        color: #fff;
        background-color: #1a1a1a;
    }

    .container {
        max-width: 1024px;
        width: 90%;
        margin: 0 auto;
    }

    .flex-center-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default GlobalStyle
