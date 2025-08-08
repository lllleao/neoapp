import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetOneComicQuery } from '../../service/api'
import ComicDetails from '../../components/ComicDetails'
import { constructLink } from '../../utils'
import { ComicContainer } from './styles'
import { useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

const Comic = () => {
    const { id } = useParams()
    const { data } = useGetOneComicQuery(id as string)
    const [photo, setPhoto] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { height } = useSelector((state: RootReducer) => state.headerHeight)

    useEffect(() => {
        if (!data) return
        // console.log(data)
        setPhoto(constructLink(data.data.results[0].images))
        setTitle(data.data.results[0].title)
    }, [data])

    return (
        <ComicContainer $headerHeight={height + 100} id="comics">
            <div className="container">
                {data ? (
                    <ComicDetails
                        description={'data.data.results[0].textObjects[0].text'}
                        title={title}
                        photo={photo}
                    />
                ) : (
                    <></>
                )}
            </div>
        </ComicContainer>
    )
}

export default Comic
