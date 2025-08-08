import Button from '../Button'
import { CardContainer, Tag, TextCard } from './styles'
import star from '../../assets/star.png'

type CardProps = {
    photo: string
    title: string
}

const Card = ({ photo, title }: CardProps) => {
    return (
        <>
            <CardContainer>
                <img className="banner" srcSet={photo} alt="comic" />
                <TextCard as="h3">{title}</TextCard>
                <TextCard>
                    Uma história em quadrinhos de tirar o fôlego. Conheça e se
                    impressione!
                </TextCard>
                <div className="tag-star">
                    <Tag>Raro</Tag>
                    <div className="rate">
                        <span>4.3</span>
                        <img srcSet={star} alt="star" />
                    </div>
                </div>
                <Button />
            </CardContainer>
        </>
    )
}

export default Card
