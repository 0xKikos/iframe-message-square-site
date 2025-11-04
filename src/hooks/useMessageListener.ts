import { useEffect, useCallback } from 'react'
import { useSendMessage } from './useSendMessage'

const mainSiteOrigin = import.meta.env.VITE_MAIN_PATH
console.log("🚀 ~ mainSiteOrigin:", mainSiteOrigin)

/**
 * 全局消息监听 Hook
 * 用于在 Layout 中监听来自父页面的消息
 */
export const useMessageListener = () => {

  const { sendToParent } = useSendMessage()

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== mainSiteOrigin) return
      try {
        console.log('Message received:', event.data)
        switch (event.data.type) {
          case 'COMMONS_INIT':
            initToken(event.data)
            break
          default:
            console.log('Unknown message type:', event.data.type)
        }
      } catch (error) {
        console.error('Message listener error:', error)
      }
    },
    [mainSiteOrigin]
  )

  const initToken = (data: any) => {
    console.log("initToken", data);
    sendToParent({
      type: 'COMMONS_INIT_SUCCESS',
      data: {
        message: "init token success"
      }
    })
  }



  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])
}

