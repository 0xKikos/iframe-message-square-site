
const Card = () => {
  return (
    <div className='bg-[#F2F4F7] p-4 rounded-lg'>
      <div className='flex items-center gap-2'>
        <img alt='avatar' className='rounded-full size-10 bg-gray-200' src='https://commonsdao-test.s3.ap-northeast-1.amazonaws.com/user/avatar/default-map/default5.png' />
        <div className='flex-1'>
          <div className='font-medium'>Kikosss</div>
          <div className='text-sm text-gray-500'>2h ago</div>
        </div>
      </div>
      <div>
        <p>This is a tweet used for testing</p>
      </div>
      <img alt="tweet-image" className="h-auto max-h-80 w-full cursor-pointer object-cover rounded-md mt-2" loading="lazy" src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/415d17ceb1334a47bbcda3575acc71a0.png"></img>
    </div>
  )
}

export default Card