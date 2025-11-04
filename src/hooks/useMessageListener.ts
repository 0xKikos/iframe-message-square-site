import { useEffect, useCallback } from 'react'
const mainSiteOrigin = import.meta.env.VITE_MAIN_PATH



export const useMessageListener = ({ onMessage }: { onMessage?: (event: MessageEvent) => void } = {}) => {

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== mainSiteOrigin) return
      try {
        console.log('❇️ Square: Message Received:', event.data)
        onMessage?.(event.data);
      } catch (error) {
        console.error('❇️ Square: Message Listener Error:', error)
      }
    },
    [mainSiteOrigin, onMessage]
  )



  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])
}

