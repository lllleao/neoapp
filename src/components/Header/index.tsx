import { useState } from 'react'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
import overlayImageHeader from '../../assets/overlayHeader2.webp'

const Header = () => {
    const [activeWrapper, setActiveWrapper] = useState(false)

    return (
        <S.HeaderBar $url={overlayImageHeader}>
            <div className="container">
                <h1 className="title-logo">
                    <Link to="/">
                        <img className="logo" srcSet={logo} alt="Marvel Comics" />
                        <span className="visually-hidden">Marvel Comics</span>
                    </Link>
                </h1>
                <S.MenuBurguerWrapper
                    onClick={() => setActiveWrapper(!activeWrapper)}
                    className={activeWrapper ? 'wrapper-bar__is-active' : ''}
                >
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                </S.MenuBurguerWrapper>
            </div>
            <S.OverlayHeader />
        </S.HeaderBar>
    )
}

export default Header
