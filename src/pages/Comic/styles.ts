import styled from 'styled-components'

export const ComicContainer = styled.section<{$headerHeight: number}>`
    padding-top: ${({ $headerHeight }) => $headerHeight}px;
`
