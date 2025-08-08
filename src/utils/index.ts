import type { Comic } from '../types'

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

export const constuctDescription = (data: Comic, index: number) => {
    const desc = data.data.results[index].textObjects[0]

    if (!desc)
        return 'Uma história em quadrinhos de tirar o fôlego. Conheça e se impressione!'

    const removeBr = desc.text
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    let removeAdditionalInfo = desc.text.slice(0, removeBr.indexOf('Plus'))
    if (removeAdditionalInfo.length <= 200) return removeAdditionalInfo
    removeAdditionalInfo = removeAdditionalInfo.slice(0, 200)
    console.log(removeAdditionalInfo.trim())
    return removeAdditionalInfo.trim() + '...'
}
