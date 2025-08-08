import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: block;
    width: 100%;
    background-color: #117f11;
    text-decoration: none;
    text-align: center;
    padding: 0.4rem 0.7rem;
    font-size: 1rem;
    border: none;
    color: #fff;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 0.3s;
    border: 2px solid #eee;
    &:focus {
        background-color: #0ba80bff;
    }
`
