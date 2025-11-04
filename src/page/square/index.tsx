import { useSendMessage } from '@/hooks/useSendMessage'
import useUser from '@/store/user'
import Card from './compoents/Card'

const Square = () => {
  const { sendToParent } = useSendMessage()
  const token = useUser((state) => state.token)
  const handleClick = () => {
    sendToParent({
      type: 'COMMONS_SQUARE_DETAIL',
      data: {
        squareId: "55123"
      }
    })
  }

  return (
    <div className='min-h-screen p-4'>
      <div className='bg-[#F2F4F7] p-4 rounded-lg'>
        <div className='font-medium mb-1'>Token:</div>
        <div className='text-sm text-gray-500 break-all'>{token}</div>
      </div>
      <div className='mt-2'>
        <div className='font-medium mb-1'>Tweets:</div>
        <div className='cursor-pointer' onClick={handleClick}>
          <Card />
        </div>
      </div>

    </div>
  )
}

export default Square