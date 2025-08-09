import styled from "styled-components";

export const MenuMob = styled.ul`
    position: fixed;
    z-index: 1;
    top: 20px;
    right: 20px;
    background-color: #222;
    width: min-content;
    padding: 16px;
    opacity: 0;
    -webkit-transform: translateX(120%);
    transform: translateX(120%);
    -webkit-transition:
        opacity 0.3s 0.1s,
        transform 0.3s ease-in-out;
    transition:
        opacity 0.3s 0.1s,
        transform 0.3s ease-in-out;
    .menu-item {
        text-decoration: none;
        display: block;
        margin-bottom: 8px;
        padding: 6px;
        color: #fff;
    }

    .menu-item__cart {
        display: flex;
        justify-content: space-between;

        .number-items-mob {
            display: none;
            background-color: red;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            font-size: 1.05rem;
            font-weight: bold;
            text-align: center;
            &--visible {
                display: block;
            }
        }
    }

    &.menu-is-active {
        -webkit-transform: translate(-50px, 10px);
        display: block;
        transform: translate(0, 52px);
        opacity: 1;
        color: #fff;
    }

    @media (min-width: 1055px) {
        display: none;
    }
`
