import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {

  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  const getData = (url) => {
    const token = localStorage.getItem('token')
    const headers = { headers: { auth: token } }
    setLoading(true)

    axios.get(url, headers)
      .then((res) => {
        setLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

      useEffect(() => {
        getData(url)
      }, [url])

  return [data, loading, getData]

}

export default useRequestData
