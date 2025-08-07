import { useState } from 'react'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeWrapper, setActiveWrapper] = useState(false)
    return (
        <S.HeaderBar>
            <div className="container">
                <Link to="/">
                    <img className="logo" srcSet={logo} alt="marvel-logo" />
                </Link>
                <S.MenuBurguerWrapper
                    onClick={() => setActiveWrapper(!activeWrapper)}
                    className={activeWrapper ? 'wrapper-bar__is-active' : ''}
                >
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                </S.MenuBurguerWrapper>
            </div>
        </S.HeaderBar>
    )
}

export default Header
