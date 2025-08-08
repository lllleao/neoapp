import { CardContainer, Tag, TextCard } from './styles'

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
                <Tag>Raro</Tag>
            </CardContainer>
        </>
    )
}

export default Card
