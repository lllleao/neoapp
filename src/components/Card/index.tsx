import Button from '../Button'
import TagRate from '../TagRate'
import { CardContainer, TextCard } from './styles'

type CardProps = {
    photo: string
    title: string
    id?: number
    isSpecificComic?: boolean
    description?: string
}

const Card = ({
    photo,
    title,
    id,
    isSpecificComic,
    description
}: CardProps) => {
    return (
        <>
            <CardContainer>
                <img className="banner" srcSet={photo} alt="comic" />
                <TextCard as="h3">{title}</TextCard>
                <TextCard>{description}</TextCard>
                <TagRate />
                {isSpecificComic ? <></> : <Button id={id as number} />}
            </CardContainer>
        </>
    )
}

export default Card
