import styled from 'styled-components'

export const ListComicsContainer = styled.section<{ $headerHeight: number }>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;
    .title {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        color: red;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }

    .container {
        .buttons-page {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }

    .align-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 2 colunas iguais */
            gap: 3rem;
            place-items: center;
        }
    }
`
