import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

type ButtonProps = {
    id: number
}

const Button = ({ id }: ButtonProps) => {
    return (
        <ButtonContainer to={`/comic/${id}`} as={Link}>
            COMPRE
        </ButtonContainer>
    )
}

export default Button
