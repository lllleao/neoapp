import { useDispatch } from 'react-redux'
import Button from '../Button'
import Rate from '../Rate'
import Tag from '../Tag'
import { CardContainer, Price, TextCard } from './styles'
import { removeItemFromCart } from '../../store/reducers/cart'

type CardProps = {
    photo: string
    title: string
    id?: number
    isSpecificComic?: boolean
    description?: string
    price: string
    isOnCart?: boolean
}

const Card = ({
    photo,
    title,
    id,
    isSpecificComic,
    description,
    price,
    isOnCart
}: CardProps) => {
    const dispatch = useDispatch()
    const handleDeleteItem = () => {
        dispatch(removeItemFromCart(id as number))
    }
    return (
        <>
            <CardContainer>
                <img className="banner" srcSet={photo} alt="comic" />
                <TextCard as="h3">{title}</TextCard>
                <TextCard>{description}</TextCard>
                <Rate />
                <div className="flex-center-between margin-top-bottom">
                    <Tag />
                    {isOnCart ? (
                        <i
                            onClick={handleDeleteItem}
                            className="fa-solid fa-trash trash-ion"
                        />
                    ) : (
                        <></>
                    )}
                    <Price>{price}</Price>
                </div>
                {isSpecificComic ? <></> : <Button id={id as number} />}
            </CardContainer>
        </>
    )
}

export default Card
