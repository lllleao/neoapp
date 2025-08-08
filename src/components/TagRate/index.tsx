import { Rate, Tag, TagRateContainer } from "./styles"
import star from '../../assets/star.png'

const TagRate = () => {
    return (
        <TagRateContainer className="flex-center-between">
            <Tag>Raro</Tag>
            <Rate className="flex-center-between">
                <span>4.3</span>
                <img srcSet={star} alt="star" />
            </Rate>
        </TagRateContainer>
    )
}

export default TagRate
