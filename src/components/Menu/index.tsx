import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { MenuMob } from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

const Menu = () => {
    const { isMenuOpen } = useSelector((state: RootReducer) => state.cart)
    const itemOnCart = useSelector(
        (state: RootReducer) => state.cart.items
    ).length
    useEffect(() => {
        console.log(isMenuOpen)
    }, [isMenuOpen])
    return (
        <MenuMob className={`${isMenuOpen ? 'menu-is-active' : ''}`}>
            <li>
                <HashLink to="/#hero" className="menu-item">
                    home
                </HashLink>
            </li>
            <li>
                <Link
                    to="/cart"
                    className="menu-item menu-item__cart"
                    // onClick={handleClickCart}
                >
                    <i className="fa-solid fa-cart-shopping" />{' '}
                    <div className="number-items-mob">{itemOnCart}</div>
                </Link>
            </li>
        </MenuMob>
    )
}

export default Menu
