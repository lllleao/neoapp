import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
import overlayImageHeader from '../../assets/overlayHeader2.webp'
import { useDispatch } from 'react-redux'
import { changeHeight } from '../../store/reducers/headerHeight'
import Menu from '../Menu'
import { openMenu } from '../../store/reducers/cart'

const Header = () => {
    const [activeWrapper, setActiveWrapper] = useState(false)
    const headerBarRef = useRef<HTMLHeadElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!headerBarRef.current) return
        const height = headerBarRef.current.clientHeight
        // console.log(height)
        dispatch(changeHeight({height}))
    }, [dispatch])

    const handleWrapper = () => {
        setActiveWrapper(!activeWrapper)
        dispatch(openMenu({isMenuOpen: !activeWrapper}))
    }

    return (
        <S.HeaderBar ref={headerBarRef} $url={overlayImageHeader}>
            <div className="container">
                <h1 className="title-logo">
                    <Link to="/">
                        <img className="logo" srcSet={logo} alt="Marvel Comics" />
                        <span className="visually-hidden">Marvel Comics</span>
                    </Link>
                </h1>
                <S.MenuBurguerWrapper
                    onClick={handleWrapper}
                    className={activeWrapper ? 'wrapper-bar__is-active' : ''}
                >
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                    <li className="wrapper-bar" />
                </S.MenuBurguerWrapper>
            </div>
            <Menu />
            <S.OverlayHeader />
        </S.HeaderBar>
    )
}

export default Header
