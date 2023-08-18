import { useEffect, useState } from "react"

export function useData(currentPage) {
    interface Job {
        companyName: string
        categories: string[]
        seniority: string
        locationRestrictions: string[]
        pubDate: number
        companyLogo: string

    }
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<null|boolean | string>()

    // const[currentPage,setCurrentPage] = useState(1)
    useEffect(() => {
        const perPage = 5
        const offset = (currentPage-1 )* perPage
        const baseUrl = `https://himalayas.app/jobs/api?limit=${perPage}&offset=${offset}&city=London`
        // const baseUrl = `https://himalayas.app/jobs/api?`
        fetch(baseUrl)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setError(false)
                if(typeof res === null  || typeof res === 'string'){
                    return
                }
                setData(res.jobs)

            })
            .catch(error => {
                console.error(error)
                setError(error)
                setLoading(true)
            })
    }, [loading, error,currentPage])
    return [data, loading, error]
}
