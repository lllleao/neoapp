import type { JSX } from 'react'
import { ListComicsContainer } from './styles'

type ListComicsProps = {
    children: JSX.Element
    heightHeader: number
    idSection: string
    titleSection: string
    isHero?: boolean
}
const ListComics = ({
    children,
    heightHeader,
    idSection,
    titleSection,
    isHero
}: ListComicsProps) => {
    return (
        <ListComicsContainer
            className={isHero ? 'mt-vh pt-0' : ''}
            id={idSection}
            $headerHeight={heightHeader}
        >
            <div className="container">
                <h2 className="title">{titleSection}</h2>
                {children}
            </div>
        </ListComicsContainer>
    )
}

export default ListComics
