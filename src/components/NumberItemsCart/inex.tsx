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
        <NumberItemCartContainer $isNumberVisible={isNumberVisible}>
            {itemsOnCart}
        </NumberItemCartContainer>
    )
}

export default NumberItemsCart
