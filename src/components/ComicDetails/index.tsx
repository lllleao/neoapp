import Card from '../Card'

type ComicDetailsProps = {
    photo: string
    title: string
    description: string
}

const ComicDetails = ({ photo, title, description }: ComicDetailsProps) => {
    return <Card description={description} isSpecificComic photo={photo} title={title} />
}

export default ComicDetails
