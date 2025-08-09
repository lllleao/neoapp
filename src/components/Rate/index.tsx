import star from '../../assets/star.png'
import { RateContainer } from './styles'

const Rate = () => {
    return (
        <RateContainer className="flex-center-between">
            <span>4.3</span>
            <img srcSet={star} alt="star" />
        </RateContainer>
    )
}

export default Rate
