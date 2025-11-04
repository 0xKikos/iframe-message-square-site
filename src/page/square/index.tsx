import { useSendMessage } from '@/hooks/useSendMessage'
import useUser from '@/store/user'

const Square = () => {
  const { sendToParent } = useSendMessage()
  const token = useUser((state) => state.token)
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
    <div className='min-h-screen p-4'>
      <h1>Iframe Square</h1>
      <div className='bg-[#F2F4F7] p-2 rounded-md'>
        <div className='font-medium mb-1'>Token:</div>
        <div className='text-sm text-gray-500 break-all'>{token}</div>
      </div>
      <button onClick={handleClick}>发送消息到父页面</button>
    </div>
  )
}

export default Square