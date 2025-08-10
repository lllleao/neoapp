import { styled } from 'styled-components'
import { ButtonContainer } from '@/components/Button/styles'

export const ButtonsPageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 6rem;
`

export const ButtonPage = styled(ButtonContainer)`
    display: inline-block;
    width: auto;
    &.disabled {
        background-color: gray;
    }
`
