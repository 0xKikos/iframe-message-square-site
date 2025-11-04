import { useMessageListener } from '@/hooks/useMessageListener';
import { useSendMessage } from '@/hooks/useSendMessage';
import { useParams } from 'react-router';

const Detail = () => {
  const { sendToParent } = useSendMessage()
  const { id } = useParams()

  const handleBack = () => {
    sendToParent({
      type: "COMMONS_SQUARE_DETAIL_BACK",
    })
  }
  useMessageListener({
    onMessage: (event) => {
      // console.log("🚀 ~ Detail ~ data:", data)
      if (event.type === "COMMONS_SQUARE_DETAIL") {
        console.log("data.data", event.data);
      }
    }
  })

  return (
    <div>
      <button className="cursor-pointer" onClick={handleBack}>Back</button>
      <div className='font-medium mb-1 mt-6'>Detail:{id}</div>
    </div>
  )
}

export default Detail