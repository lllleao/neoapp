import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { MenuMobContainer } from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import NumberItemsCart from '../NumberItemsCart/inex'
import useCheckVisibility from '../../hooks/useCheckVisibility'

type MenuMobtProps = {
    itemsOnCart: number
}

const MenuMob = ({ itemsOnCart }: MenuMobtProps) => {
    const { isMenuOpen } = useSelector((state: RootReducer) => state.cart)
    const { isNumberVisible } = useCheckVisibility(itemsOnCart)
    return (
        <MenuMobContainer className={`${isMenuOpen ? 'menu-is-active' : ''}`}>
            <li>
                <HashLink to="/#home" className="menu-item">
                    <i className="fa-solid fa-house" />
                </HashLink>
            </li>
            <li>
                <Link to="/cart" className="menu-item menu-item__cart">
                    <i className="fa-solid fa-cart-shopping" />{' '}
                    <NumberItemsCart
                        isNumberVisible={isNumberVisible}
                        itemsOnCart={itemsOnCart}
                    />
                </Link>
            </li>
        </MenuMobContainer>
    )
}

export default MenuMob
