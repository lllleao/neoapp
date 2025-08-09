export type Comic = {
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
            }[],
            prices: {
                price: number
            }[]
        }[]
        total: number
    }
}

export type PaginationProps = {
    limit: number
    offSet: number
}
