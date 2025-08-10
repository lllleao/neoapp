import styled from 'styled-components'

export const CardContainer = styled.article`
    position: relative;
    z-index: 1;
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

    .margin-top-bottom {
        margin: 1.2rem 0;
    }

    .trash-ion {
        font-size: 2rem;
        cursor: pointer;
        padding: 8px;
    }
`
export const TextCard = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 1rem;
    text-align: center;
`
export const Price = styled.span`
    font-weight: bold;
    font-size: 1.6rem;
`
