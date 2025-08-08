export const constructLink = (
    images: { path: string; extension: string }[]
) => {
    const { path } = images[0]
    const { extension } = images[0]
    return path + '.' + extension
}
