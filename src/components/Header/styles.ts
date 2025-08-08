import styled from 'styled-components'

export const HeaderBar = styled.header<{ $url: string }>`
    position: relative;
    width: 100%;
    top: 0;
    background-image: ${({ $url }) => `url(${$url})`};
    background-position: center;
    background-size: cover;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        .title-logo {
            z-index: 1;
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
            z-index: 1;
            width: 100px;
        }
    }
`
export const MenuBurguerWrapper = styled.ul`
    z-index: 1;

    width: 32px;
    .wrapper-bar {
        height: 4px;
        display: block;
        width: 100%;
        background-color: #fff;
        margin-bottom: 6px;
        border-radius: 1rem;
        transition: transform 0.2s linear;
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
`
export const OverlayHeader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000b8;
    top: 0;
`
