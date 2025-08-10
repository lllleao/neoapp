import { useEffect, useState } from 'react'
import { ButtonPage } from './styles'
import { useGetComicsToHeroQuery } from '../../service/api'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import {
    changePage,
    constructDescription,
    constructLink,
    priceFormat
} from '../../utils'
import Card from '../../components/Card'
import ListComics from '../../components/ListComics'

const HomeComics = () => {
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 10
    const { data, isFetching } = useGetComicsToHeroQuery({ limit, offSet })
    const { height } = useSelector((state: RootReducer) => state.headerHeight)

    useEffect(() => {
        console.log(data)
        if (!isFetching) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [isFetching, data])
    return (
        <ListComics
            idSection="home"
            titleSection="MARVEL'S COMICS"
            heightHeader={height}
        >
            {data ? (
                <>
                    <div className="align-cards">
                        {
                            // Tive que fazer esse filtro, pois alguns itens não possuem fotos.
                            data.data.results
                                .filter(({ images }) => images[0])
                                .map(({ id, images, title, prices }, index) => (
                                    <Card
                                        title={title}
                                        key={id}
                                        id={id}
                                        description={constructDescription(
                                            data,
                                            index
                                        )}
                                        photo={constructLink(images)}
                                        price={priceFormat(
                                            String(prices[0].price)
                                        )}
                                    />
                                ))
                        }
                    </div>
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
                                page * limit >= data?.data.total || isFetching
                            }
                            className={
                                page * limit >= data?.data.total || isFetching
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
        </ListComics>
    )
}

export default HomeComics
