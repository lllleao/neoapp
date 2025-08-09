import Button from '../Button'
import Rate from '../Rate'
import Tag from '../Tag'
import { CardContainer, Price, TextCard } from './styles'

type CardProps = {
    photo: string
    title: string
    id?: number
    isSpecificComic?: boolean
    description?: string
    price: string
}

const Card = ({
    photo,
    title,
    id,
    isSpecificComic,
    description,
    price
}: CardProps) => {
    return (
        <>
            <CardContainer>
                <img className="banner" srcSet={photo} alt="comic" />
                <TextCard as="h3">{title}</TextCard>
                <TextCard>{description}</TextCard>
                <Rate />
                <div className="flex-center-between mb-0">
                    <Tag />
                    <Price>{price}</Price>
                </div>
                {isSpecificComic ? <></> : <Button id={id as number} />}
            </CardContainer>
        </>
    )
}

export default Card
