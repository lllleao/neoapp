import styled from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'

export const ComicContainer = styled.section<{$headerHeight: number}>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;
    .mb-0 {
        margin-bottom: 0;
    }
`
export const ButtonAddToCart = styled(ButtonContainer)`
    border: none;
    background-color: #4f14e3;
    box-shadow: 0 6px 4px #000;
    &:focus {
        background-color: #6d33ffff;
    }
`
