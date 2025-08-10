import { HashLink } from 'react-router-hash-link'
import { MenuDesktopContainer } from './styles'
import NumberItemsCart from '../NumberItemsCart/inex'
import { useEffect } from 'react'
import useCheckVisibility from '../../hooks/useCheckVisibility'

type MenuDesktopProps = {
    itemsOnCart: number
}
const MenuDesktop = ({ itemsOnCart }: MenuDesktopProps) => {
    const { isNumberVisible } = useCheckVisibility(itemsOnCart)

    useEffect(() => {
        console.log(isNumberVisible)
    }, [isNumberVisible])
    return (
        <MenuDesktopContainer className="flex-center-between">
            <li>
                <HashLink className="home" to="/#home">
                    HOME
                </HashLink>
            </li>
            <li>
                <HashLink className="cart flex-center-between" to="/cart">
                    <span>CART</span>
                    <NumberItemsCart
                        isNumberVisible={isNumberVisible}
                        itemsOnCart={itemsOnCart}
                    />
                </HashLink>
            </li>
        </MenuDesktopContainer>
    )
}

export default MenuDesktop
