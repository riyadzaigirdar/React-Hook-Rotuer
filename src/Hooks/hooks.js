import { useState, useEffect } from 'react'
import axios from 'axios'

export function useAxios(url) {
    const [response, setResponse] = useState({ data: null, loading: false, error: false })

    useEffect(() => {
        setResponse({ data: null, loading: true, error: false })
        axios.get(url)
            .then((res) => {
                setResponse({ data: res.data, loading: false, error: false })
            })
            .catch(err => setResponse({ data: null, loading: false, error: true }))
    }, [url])
    return response
}