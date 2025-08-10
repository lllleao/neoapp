import styled from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'

export const OneComicContainer = styled.section<{ $headerHeight: number }>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;
    .margin-top-bottom {
        margin-bottom: 0;
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
`
export const Creator = styled.p`
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;
    .creator-name {
        font-weight: bold;
    }
`
