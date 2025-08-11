import type { Comic, ItemToCart } from '@/types'

export const constructLink = (
    images: { path: string; extension: string }[]
) => {
    const { path } = images[0]
    const { extension } = images[0]
    return path + '.' + extension
}

export const changePage = (
    setOffSet: (value: React.SetStateAction<number>) => void,
    setPage: (value: React.SetStateAction<number>) => void,
    limit: number,
    isNext?: boolean
) => {
    if (!isNext) {
        setOffSet((p) => Math.max(p - limit, 0))
        return setPage((p) => Math.max(p - 1, 1))
    }
    setOffSet((p) => p + limit)
    setPage((p) => p + 1)
}

export const constructDescription = (
    data: Comic,
    index: number,
    isOne?: boolean
) => {
    const descFilter = data.data.results.filter(({ images }) => images[0])
    const desc = descFilter[index].textObjects[0]

    if (!desc) return 'A breathtaking comic book. Discover it and be impressed!'

    const removeBr = desc.text
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    let removeAdditionalInfo = desc.text.slice(0, removeBr.indexOf('Plus'))

    if (removeAdditionalInfo.length <= 200 || isOne) return removeAdditionalInfo
    removeAdditionalInfo = removeAdditionalInfo.slice(0, 200)
    return removeAdditionalInfo.trim() + '...'
}

export const priceFormat = (price: string) => {
    if (price === '0') return '$ 3,99'
    return '$ ' + price.replace('.', ',')
}

export const sumTot = (items: ItemToCart[]) => {
    if (!items || items.length === 0) return 0
    return items.reduce((acum, currentItem) => {
        return (acum += currentItem.price)
    }, 0)
}

export const rareComid = (data: Comic) => {
    // O limite das comics na home é de no máximo dez, então sempre terá apenas uma comic rara
    const descFilter = data.data.results.filter(({ images }) => images[0])
    const randomNum = Math.floor(Math.random() * (descFilter.length + 1))
    const corretctIndex = randomNum - 1 < 0 ? 0 : randomNum
    return descFilter[corretctIndex].title
}
