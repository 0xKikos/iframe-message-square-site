import { useSendMessage } from '@/hooks/useSendMessage'

const Square = () => {
  const { sendToParent } = useSendMessage()

  const handleClick = () => {
    // 向父页面发送消息
    sendToParent({
      type: 'squareAction',
      payload: {
        message: '来自 Square 页面的消息',
        timestamp: Date.now()
      }
    })
  }

  return (
    <div>
      <h1>Iframe Square</h1>
      <button onClick={handleClick}>发送消息到父页面</button>
    </div>
  )
}

export default Square