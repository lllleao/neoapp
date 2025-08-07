import styled from 'styled-components'

export const HeaderBar = styled.header`
    background-color: #333333;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        margin: 0 auto;
        .logo {
            width: 100px;
        }
    }
`
export const MenuBurguerWrapper = styled.ul`
    width: 32px;
    .wrapper-bar {
        list-style: none;
        height: 4px;
        display: block;
        width: 100%;
        background-color: #fff;
        margin-bottom: 6px;
        border-radius: 1rem;
        transition: transform .2s linear;
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
