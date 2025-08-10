import { useSelector } from 'react-redux'
import ListComics from '../../components/ListComics'
import type { RootReducer } from '../../store'
import Card from '../../components/Card'
import TotalPrice from '../../components/TotalPrice'
import { sumTot } from '../../utils'

const CartComics = () => {
    const { height } = useSelector((state: RootReducer) => state.headerHeight)
    const { items } = useSelector((state: RootReducer) => state.cart)
    return (
        <ListComics
            heightHeader={height + 50}
            idSection="cart"
            titleSection="SHOPPING CART"
        >
            {items[0] ? (
                <>
                    <div className="align-cards-cart">
                        {items.map(({ image, id, price, title }) => (
                            <Card
                                photo={image}
                                price={'$ ' + String(price).replace('.', ',')}
                                title={title}
                                isOnCart
                                id={id}
                                key={id}
                            />
                        ))}
                    </div>
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
