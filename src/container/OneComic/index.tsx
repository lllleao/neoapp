import { useDispatch, useSelector } from 'react-redux'
import { useGetOneComicQuery } from '../../service/api'
import { useParams } from 'react-router-dom'
import type { ItemToCart } from '../../types'
import { useEffect, useState } from 'react'
import { constructDescription, constructLink, priceFormat } from '../../utils'
import { addToCart } from '../../store/reducers/cart'
import { ButtonAddToCart, OneComicContainer, Creator } from './styles'
import type { RootReducer } from '../../store'
import Card from '../../components/Card'

interface OneComic extends ItemToCart {
    creator: string | undefined
}

const OneComic = () => {
    const { id } = useParams()
    const { data } = useGetOneComicQuery(id as string)
    const [oneComicData, setOneComicData] = useState<OneComic>()
    const dispatch = useDispatch()
    const { height } = useSelector((state: RootReducer) => state.headerHeight)

    useEffect(() => {
        if (!data) return
        if (!id) return

        console.log(data)
        setOneComicData({
            id: Number(id),
            image: constructLink(data.data.results[0].images),
            price: data.data.results[0].prices[0].price,
            title: data.data.results[0].title,
            creator: data.data.results[0].creators.items[0].name
        })
    }, [data, id])

    const handleAddToCart = () => {
        if (!oneComicData) return

        dispatch(
            addToCart({
                id: Number(id),
                image: oneComicData.image,
                price: oneComicData.price ? oneComicData.price : 3.99,
                title: oneComicData.title
            })
        )
        console.log(oneComicData.price)
    }
    return (
        <OneComicContainer $headerHeight={height + 50} id="comics">
            <div className="container">
                {data && oneComicData ? (
                    <div className="one-comic-card">
                        <Card
                            isSpecificComic
                            description={constructDescription(data, 0, true)}
                            title={oneComicData.title}
                            photo={oneComicData.image}
                            price={priceFormat(String(oneComicData.price))}
                        />
                    </div>
                ) : (
                    <></>
                )}
                <Creator>
                    Created for:{' '}
                    <span className="creator-name">
                        {oneComicData?.creator || 'Unknow author'}
                    </span>
                </Creator>
                <ButtonAddToCart
                    $isDisabled={Boolean(!data)}
                    disabled={Boolean(!data)}
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </ButtonAddToCart>
            </div>
        </OneComicContainer>
    )
}

export default OneComic
