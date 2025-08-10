import styled from 'styled-components'

export const ImageHeroContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        position: sticky;
        z-index: 1;
        top: 0;
        height: 100vh;
    }
`
