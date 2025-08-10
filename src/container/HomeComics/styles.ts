import { styled } from 'styled-components'
import { ButtonContainer } from '../../components/Button/styles'

export const ButtonPage = styled(ButtonContainer)`
    display: inline-block;
    width: auto;
    &.disabled {
        background-color: gray;
    }
`
