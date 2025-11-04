import { useCallback } from 'react'

const mainSiteOrigin = import.meta.env.VITE_MAIN_PATH

export const useSendMessage = () => {
  const sendToParent = useCallback(
    (data: any, targetOrigin: string = mainSiteOrigin) => {
      if (window.parent && window.parent !== window) {
        console.log("❇️ Square: Send Message", data);
        window.parent.postMessage(data, targetOrigin)
      } else {
        console.warn('❇️ Square: Current page is not in iframe')
      }
    },
    []
  )

  return { sendToParent }
}

