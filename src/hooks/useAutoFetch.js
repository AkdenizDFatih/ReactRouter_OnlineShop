import { useEffect } from 'react'
import useApiRequest from './useApiRequest.js'

const useAutoFetch = (method, url, requestData) => {
  const accessToken = localStorage.getItem('accessToken')
  const [sendRequest, responseData, isLoading, error] = useApiRequest()

  useEffect(() => {
    if (accessToken) sendRequest(method, url, requestData)
  }, [accessToken, sendRequest, method, url, requestData])

  return [responseData, isLoading, error]
}

export default useAutoFetch
