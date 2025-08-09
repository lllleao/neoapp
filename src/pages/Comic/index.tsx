import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetOneComicQuery } from '../../service/api'
import ComicDetails from '../../components/ComicDetails'
import { constructDescription, constructLink, priceFormat } from '../../utils'
import { ButtonAddToCart, ComicContainer } from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

const Comic = () => {
    const { id } = useParams()
    const { data } = useGetOneComicQuery(id as string)
    const [photo, setPhoto] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('0')
    const { height } = useSelector((state: RootReducer) => state.headerHeight)

    useEffect(() => {
        if (!data) return
        console.log(data)
        setPhoto(constructLink(data.data.results[0].images))
        setTitle(data.data.results[0].title)
        setPrice(priceFormat(String(data.data.results[0].prices[0].price)))
    }, [data])

    return (
        <ComicContainer $headerHeight={height + 50} id="comics">
            <div className="container">
                {data ? (
                    <ComicDetails
                        description={constructDescription(data, 0, true)}
                        title={title}
                        photo={photo}
                        price={price}
                    />
                ) : (
                    <></>
                )}
                <ButtonAddToCart>
                    ADD TO CART
                </ButtonAddToCart>
            </div>
        </ComicContainer>
    )
}

export default Comic
