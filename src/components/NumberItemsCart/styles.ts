import styled from 'styled-components'

export const NumberItemCartContainer = styled.div<{
    $isNumberVisible: boolean
}>`
    display: ${({ $isNumberVisible }) => ($isNumberVisible ? 'block' : 'none')};
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50px;
    font-size: 1.05rem;
    font-weight: bold;
    text-align: center;
`
