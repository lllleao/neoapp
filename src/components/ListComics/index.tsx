import { useEffect, useState } from 'react'
import { useGetComicsToHeroQuery } from '../../service/api'
import { constructLink, changePage, constuctDescription } from '../../utils'
import Card from '../Card'
import { ButtonPage, ListComicsContainer } from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

const ListComics = () => {
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 10
    const { data, isFetching } = useGetComicsToHeroQuery({ limit, offSet })
    const { height } = useSelector((state: RootReducer) => state.headerHeight)

    useEffect(() => {
        if (!isFetching) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [isFetching])

    return (
        <ListComicsContainer id="home" $headerHeight={height + 100}>
            <div className="container">
                <h2 className="comics-title">MARVEL&apos;S COMICS</h2>
                {data ? (
                    <>
                        {
                            // Tive que fazer esse filtro, pois alguns itens não possuem fotos.
                            data.data.results
                                .filter(({ images }) => images[0])
                                .map(({ id, images, title }, index) => (
                                    <Card
                                        title={title}
                                        key={id}
                                        id={id}
                                        description={constuctDescription(data, index)}
                                        photo={constructLink(images)}
                                    />
                                ))
                        }
                        <div className="buttons-page">
                            <ButtonPage
                                onClick={() =>
                                    changePage(setOffSet, setPage, limit, false)
                                }
                                disabled={page === 1 || isFetching}
                                className={
                                    page === 1 || isFetching ? 'disabled' : ''
                                }
                            >
                                Previous
                            </ButtonPage>
                            <ButtonPage
                                onClick={() =>
                                    changePage(setOffSet, setPage, limit, true)
                                }
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
