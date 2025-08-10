import { NumberItemCartContainer } from './styles'

type NumberItemsCartProps = {
    itemsOnCart: number
    isNumberVisible: boolean
}
const NumberItemsCart = ({
    itemsOnCart,
    isNumberVisible
}: NumberItemsCartProps) => {
    return (
        <NumberItemCartContainer
            className="cart-count"
            $isNumberVisible={isNumberVisible}
        >
            {itemsOnCart}
        </NumberItemCartContainer>
    )
}

export default NumberItemsCart
