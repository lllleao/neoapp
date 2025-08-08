import { useEffect } from 'react'
import { useGetComicsToHeroQuery } from '../../service/api'
import { constructLink } from '../../utils'
import Card from '../Card'
import { ListComicsContainer } from './styles'

const ListComics = () => {
    const { data } = useGetComicsToHeroQuery()

    useEffect(() => {
        if (!data) return
        console.log(data)
    }, [data])
    return (
        <ListComicsContainer>
            <div className="container">
                <h2 className="comics-title">MARVEL&apos;S COMICS</h2>
                {data ? (
                    // Tive que fazer esse filtro, pois esses itens não possuem fotos.
                    data.data.results
                        .filter(({ images }) => images[0])
                        .map(({ id, images, title }) => (
                            <Card
                                title={title}
                                key={id}
                                // description={textObjects[0].text}
                                photo={constructLink(images)}
                            />
                        ))
                ) : (
                    <></>
                )}
            </div>
        </ListComicsContainer>
    )
}

export default ListComics
