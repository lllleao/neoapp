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
        background-color: #000;
    }

    .container {
        max-width: 1024px;
        width: 80%;
        margin: 0 auto;
    }

    .flex-center-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

     .align-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 0.5fr);
            gap: 3rem;
            place-items: center;
        }
    }
`

export default GlobalStyle
