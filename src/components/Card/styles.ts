import styled from 'styled-components'

export const CardContainer = styled.article`
    padding: 1rem;
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
`
export const TextCard = styled.p`
    color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 1rem;
    text-align: center;
`
export const Tag = styled.span`
    display: inline-block;
    margin-bottom: 1rem;
    color: #fff;
    font-weight: bold;
    background-color: #4f14e3;
    padding: 0.3rem 0.7rem;
`
