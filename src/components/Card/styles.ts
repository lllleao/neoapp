import styled from 'styled-components'

export const CardContainer = styled.article`
    padding: 1rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    background-color: #222;
    border-radius: 1rem;
    box-shadow: -8px 0px 9px #000;
    max-width: 400px;
    .banner {
        text-align: center;
        width: 100%;
        border: 2px solid #eee;
    }

    .tag-star, .rate {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tag-star {
        margin-bottom: 1rem;
    }
    .rate {
        span {
            margin-right: 0.5rem;
        }
    }
`
export const TextCard = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 1rem;
    text-align: center;
`

