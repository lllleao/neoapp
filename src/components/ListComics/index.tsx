import type { JSX } from 'react'
import { ListComicsContainer } from './styles'

type ListComicsProps = {
    children: JSX.Element
    heightHeader: number
    idSection: string
    titleSection: string
}
const ListComics = ({
    children,
    heightHeader,
    idSection,
    titleSection
}: ListComicsProps) => {
    return (
        <ListComicsContainer id={idSection} $headerHeight={heightHeader + 50}>
            <div className="container">
                <h2 className="title">{titleSection}</h2>
                {children}
            </div>
        </ListComicsContainer>
    )
}

export default ListComics
