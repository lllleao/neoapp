export type Comic = {
    attributionText: string
    data: {
        results: {
            id: number
            title: string
            creators: {
                items: { name: string }[]
            }
            images: {
                path: string
                extension: string
            }[]
            textObjects: {
                text: string
            }[]
            prices: {
                price: number
            }[]
        }[]
        total: number
    }
}

export type Pagination = {
    limit: number
    offSet: number
}

export type ItemToCart = {
    id: number
    title: string
    price: number
    image: string
}
