import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {

  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  const getData = (url) => {
    
    const headers = { headers: { authorization: localStorage.getItem("token") } }

    setLoading(true)

    axios.get(url, headers)
      .then((res) => {
        setLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
        setLoading(false)
      })
  }

      useEffect(() => {
        getData(url)
      }, [url])

  return [data, loading, getData]

}

export default useRequestData
