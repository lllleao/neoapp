import hero from '../../assets/hero.jpg'
import { ImageHeroContainer } from './styles'

const ImageHero = () => {
    return (
        <ImageHeroContainer>
            <img alt="" srcSet={hero} />
        </ImageHeroContainer>
    )
}

export default ImageHero
