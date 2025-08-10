import styled from 'styled-components'
import { CardContainer } from '@/components/Card/styles'

export const ListComicsContainer = styled.section<{ $headerHeight: number }>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;

    .title {
        margin-bottom: 2rem;
        text-align: center;
        font-size: clamp(2rem, 5vw, 2.6rem);
        font-family: 'Marvel', sans-serif;
        color: #eee;
        text-shadow:
            -1px -1px 5px #f51414ff,
            1px -1px 0 #f51414ff,
            -1px 1px 0 #f51414ff,
            1px 1px 0 #f51414ff;
    }

    .container {
        .align-cards-cart {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            ${CardContainer} {
                flex: 0 1 300px;
            }
        }
    }
    // Home
    @media screen and (min-width: 768px) {
        padding-bottom: 3rem;
        &.mt-vh {
            background-color: #000;
            margin-top: 100vh;
            position: relative;
            z-index: 3;
            padding-top: 30px;
        }
        .title {
            letter-spacing: 0.6rem;
            margin-bottom: 3rem;
        }
    }
`
