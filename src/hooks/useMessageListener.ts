import { useEffect, useCallback } from 'react'
import useUser from '@/store/user'

const mainSiteOrigin = import.meta.env.VITE_MAIN_PATH



export const useMessageListener = () => {

  const setToken = useUser((state) => state.setToken)
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== mainSiteOrigin) return
      try {
        console.log('❇️ Square: Message received:', event.data)
        switch (event.data.type) {
          case 'COMMONS_INIT':
            initToken(event.data)
            break
          default:
            console.log('❇️ Square: SquareUnknown message type:', event.data.type)
        }
      } catch (error) {
        console.error('❇️ Square: Message listener error:', error)
      }
    },
    [mainSiteOrigin]
  )

  const initToken = (data: any) => {
    console.log("❇️ Square: init token", data);
    window.localStorage.setItem('square_token', data.data.token)
    setToken(data.data.token)
  }



  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])
}

