import Card from '../Card'

type ComicDetailsProps = {
    photo: string
    title: string
    description: string
    price: string
}

const ComicDetails = ({ photo, title, description, price }: ComicDetailsProps) => {
    return <Card price={price} description={description} isSpecificComic photo={photo} title={title} />
}

export default ComicDetails
