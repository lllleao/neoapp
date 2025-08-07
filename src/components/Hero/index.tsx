import { useEffect } from "react"
import { useGetComicsQuery } from "../../service/api"

const Hero = () => {
    const { data } = useGetComicsQuery()
    
    useEffect(() => {
        console.log(data)
    }, [data])
    return <div></div>
}

export default Hero
