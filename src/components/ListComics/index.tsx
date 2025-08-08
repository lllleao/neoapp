import { useEffect, useState } from 'react'
import { useGetComicsToHeroQuery } from '../../service/api'
import { constructLink } from '../../utils'
import Card from '../Card'
import { ButtonPage, ListComicsContainer } from './styles'

const ListComics = () => {
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 10
    const { data, isFetching } = useGetComicsToHeroQuery({ limit, offSet })

    const nextPage = () => {
        setOffSet((p) => p + limit)
        setPage((p) => p + 1)
    }

    const previousPage = () => {
        setOffSet((p) => Math.max(p - limit, 0))
        setPage((p) => Math.max(p - 1, 1))
    }

    useEffect(() => {
        // if (!data) return
        console.log(isFetching)
    }, [data, isFetching])
    return (
        <ListComicsContainer>
            <div className="container">
                <h2 className="comics-title">MARVEL&apos;S COMICS</h2>
                {data ? (
                    <>
                        {
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
                        }
                        <div className="buttons-page">
                            <ButtonPage
                                onClick={previousPage}
                                disabled={page === 1 || isFetching}
                                className={
                                    page === 1 || isFetching ? 'disabled' : ''
                                }
                            >
                                Previous
                            </ButtonPage>
                            <ButtonPage
                                onClick={nextPage}
                                disabled={
                                    page * limit >= data?.data.total ||
                                    isFetching
                                }
                                className={
                                    page * limit >= data?.data.total ||
                                    isFetching
                                        ? 'disabled'
                                        : ''
                                }
                            >
                                Next
                            </ButtonPage>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </ListComicsContainer>
    )
}

export default ListComics
