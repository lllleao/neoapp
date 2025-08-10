import styled from 'styled-components'

export const MenuDesktopContainer = styled.ul`
    gap: 2rem;
    .home,
    .cart {
        position: relative;
        padding: 0.5rem;
        text-decoration: none;
        color: #fff;
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 0;
            background-color: #ec0002;
            transition: width 0.3s linear;
        }

        &:hover::after {
            width: 100%;
        }
    }
    &.flex-center-between {
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
`
