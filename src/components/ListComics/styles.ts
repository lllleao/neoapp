import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const ListComicsContainer = styled.section<{$headerHeight: number}>`
    padding-top: ${({$headerHeight}) => $headerHeight}px;
    .comics-title {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.5REM;
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
        }
    }
`
export const ButtonPage = styled(ButtonContainer)`
    display: inline-block;
    width: auto;
    &.disabled {
        background-color: gray;
    }
`
