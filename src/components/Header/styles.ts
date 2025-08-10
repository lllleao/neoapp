import styled from 'styled-components'

export const HeaderBar = styled.header<{ $isHome: boolean }>`
    position: absolute;
    background-color: #83010300;
    z-index: 2;
    top: 0;
    width: 100%;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        .title-logo {
            .visually-hidden {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                overflow: hidden;
                border: 0;
            }
        }
        .logo {
            width: 100px;
        }
    }
    @media screen and (min-width: 768px) {
        position: ${({ $isHome }) => ($isHome ? 'fixed' : 'static')};
        display: flex;
        justify-content: space-between;
    }
`
export const MenuBurguerWrapper = styled.ul`
    position: fixed;
    top: 23px;
    right: 18px;
    z-index: 2;
    width: 32px;
    .wrapper-bar {
        height: 4px;
        display: block;
        width: 100%;
        background-color: #fff;
        border-radius: 1rem;
        transition: transform 0.2s linear;
        &:nth-child(2) {
            margin: 6px 0;
        }
    }
    &.wrapper-bar__is-active {
        .wrapper-bar {
            &:nth-child(1) {
                transform: rotate(-45deg) translate(-8px, 8px);
            }
            &:nth-child(2) {
                transform: rotate(-45deg) translate(-1px, 1px);
            }
            &:nth-child(3) {
                transform: rotate(45deg) translate(-6px, -6px);
            }
        }
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const OverlayHeader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000b8;
    top: 0;
`
