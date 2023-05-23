import { useState } from 'react'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://motion.propulsion-home.ch/backend/api',
})

const useApiRequest = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = (method, url, data) => {
    axiosInstance({ method, url, data })
      .then((response) => {
        setError(null)
        setIsLoading(true)
        if (response.data) {
          return setData(response.data)
        }
        return setData('success')
      })
      .catch((error) => {
        return setError(error.response.data)
      })
      .finally(() => setIsLoading(false))
  }
  return [sendRequest, data, error, isLoading]
}

export default useApiRequest
