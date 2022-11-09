import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Zaha Hadid`
    }, [title])
}


export default useTitle;