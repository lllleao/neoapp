import { useSelector } from 'react-redux'
import ListComics from '../../components/ListComics'
import type { RootReducer } from '../../store'
import Card from '../../components/Card'
import TotalPrice from '../../components/TotalPrice'
import { sumTot } from '../../utils'

const CartComics = () => {
    const { height } = useSelector((state: RootReducer) => state.headerHeight)
    const { items } = useSelector((state: RootReducer) => state.cart)
    // console.log(items[0].price)
    return (
        <ListComics
            heightHeader={height}
            idSection="cart"
            titleSection="SHOPPING CART"
        >
            {items[0] ? (
                <>
                    {items.map(({ image, id, price, title }) => (
                        <Card
                            photo={image}
                            price={'$ ' + String(price).replace('.', ',')}
                            title={title}
                            isSpecificComic
                            isOnCart
                            id={id}
                            key={id}
                        />
                    ))}
                    <TotalPrice>
                        {String(sumTot(items)).replace('.', ',')}
                    </TotalPrice>
                </>
            ) : (
                <></>
            )}
        </ListComics>
    )
}

export default CartComics
