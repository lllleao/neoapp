import { useEffect, useState } from 'react'

const useCheckVisibility = (itemsOnCart: number) => {
    const [isNumberVisible, setIsNumberVisible] = useState(false)
    useEffect(() => {
        if (itemsOnCart === 0) return setIsNumberVisible(false)
        setIsNumberVisible(true)
    }, [itemsOnCart])

    return { isNumberVisible }
}

export default useCheckVisibility
