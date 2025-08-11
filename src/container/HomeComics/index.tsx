import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from '@/components/Card'
import ListComics from '@/components/ListComics'
import ImageHero from '@/components/ImageHero'
import { useGetComicsToHeroQuery } from '@/service/api'
import type { RootReducer } from '@/store'
import { addCopyRight, addIsRare } from '@/store/reducers/utilsInfo'
import {
    changePage,
    constructDescription,
    constructLink,
    priceFormat,
    rareComid
} from '@/utils'
import { ButtonPage, ButtonsPageContainer } from './styles'

const HomeComics = () => {
    const [offSet, setOffSet] = useState(0)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const limit = 10
    const { data, isFetching } = useGetComicsToHeroQuery({ limit, offSet })
    const { height } = useSelector((state: RootReducer) => state.utilsInfo)

    useEffect(() => {
        if (!isFetching) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [isFetching])

    useEffect(() => {
        if (!data) return
        dispatch(addCopyRight(data.attributionText))
        dispatch(addIsRare(rareComid(data)))
    }, [data, dispatch])

    return (
        <>
            <ImageHero />
            <ListComics
                idSection="home"
                titleSection="MARVEL COMICS"
                heightHeader={height}
                isHero
            >
                {data ? (
                    <>
                        <div className="align-cards">
                            {
                                // Tive que fazer esse filtro, pois alguns itens não possuem fotos.
                                data.data.results
                                    .filter(({ images }) => images[0])
                                    .map(
                                        (
                                            { id, images, title, prices },
                                            index
                                        ) => (
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
                                        )
                                    )
                            }
                        </div>
                        <ButtonsPageContainer>
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
                        </ButtonsPageContainer>
                    </>
                ) : (
                    <></>
                )}
            </ListComics>
        </>
    )
}

export default HomeComics
