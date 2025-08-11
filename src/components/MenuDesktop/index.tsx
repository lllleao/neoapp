import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react'
import NumberItemsCart from '@/components/NumberItemsCart'
import useCheckVisibility from '@/hooks/useCheckVisibility'
import { MenuDesktopContainer } from './styles'

type MenuDesktopProps = {
    itemsOnCart: number
}
const MenuDesktop = ({ itemsOnCart }: MenuDesktopProps) => {
    const { isNumberVisible } = useCheckVisibility(itemsOnCart)

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
