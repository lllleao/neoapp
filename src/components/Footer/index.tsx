import { useSelector } from 'react-redux'
import type { RootReducer } from '@/store'
import { FooterContainer } from './styles'

const Footer = () => {
    const { copyRight } = useSelector(
        (state: RootReducer) => state.headerHeight
    )
    return (
        <FooterContainer>
            <div className="container">
                {copyRight ? (
                    copyRight
                ) : (
                    <>All rights reserved for MARVEL Comics &copy;</>
                )}
            </div>
        </FooterContainer>
    )
}

export default Footer
