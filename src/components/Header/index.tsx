import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MenuMob from '@/components/MenuMob'
import MenuDesktop from '@/components/MenuDesktop'
import { openMenu } from '@/store/reducers/cart'
import type { RootReducer } from '@/store'
import { changeHeight } from '@/store/reducers/utilsInfo'
import * as S from './styles'
import logo from '@/assets/logo.svg'

const Header = () => {
    const { pathname } = useLocation()

    const [activeWrapper, setActiveWrapper] = useState(false)
    const [isHome, setIsHome] = useState(true)

    const headerBarRef = useRef<HTMLHeadElement>(null)
    const dispatch = useDispatch()

    const itemsOnCart = useSelector(
        (state: RootReducer) => state.cart.items
    ).length

    useEffect(() => {
        if (!headerBarRef.current) return
        const height = headerBarRef.current.clientHeight
        dispatch(changeHeight(height))
    }, [dispatch])

    useEffect(() => {
        setIsHome(pathname === '/')
    }, [pathname])

    const handleWrapper = () => {
        setActiveWrapper(!activeWrapper)
        dispatch(openMenu({ isMenuOpen: !activeWrapper }))
    }

    return (
        <S.HeaderBar $isHome={isHome} ref={headerBarRef}>
            <div className="container">
                <h1 className="title-logo">
                    <Link to="/">
                        <img
                            className="logo"
                            srcSet={logo}
                            alt="Marvel Comics"
                        />
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
                <MenuDesktop itemsOnCart={itemsOnCart} />
            </div>
            <MenuMob itemsOnCart={itemsOnCart} />
        </S.HeaderBar>
    )
}

export default Header
