import { Price } from './styles'

const TotalPrice = ({ children }: { children: string }) => {
    return (
        <Price>
            Total: <span className="priceNum">$ {children}</span>
        </Price>
    )
}

export default TotalPrice
