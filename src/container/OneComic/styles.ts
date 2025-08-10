import styled from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'
import { CardContainer } from '../../components/Card/styles'

export const OneComicContainer = styled.section<{ $headerHeight: number }>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;
    padding-bottom: 3rem;
    .margin-top-bottom {
        margin-bottom: 0;
    }

    .one-comic-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 768px) {
            ${CardContainer} {
                max-width: 500px;
            }
        }
    }
`
export const ButtonAddToCart = styled(ButtonContainer)<{
    $isDisabled: boolean
}>`
    border: none;
    background-color: ${({ $isDisabled }) =>
        $isDisabled ? '#505050ff' : '#4f14e3'};
    box-shadow: 0 6px 4px #000;
    margin-bottom: 2rem;
    &:focus {
        background-color: ${({ $isDisabled }) =>
            $isDisabled ? '#505050ff' : '#6d33ffff'};
    }

    @media screen and (min-width: 768px) {
        display: block;
        margin: 0 auto;
        max-width: 200px;
        width: 100%;
    }
`
export const Creator = styled.p`
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;
    .creator-name {
        font-weight: bold;
    }
`
