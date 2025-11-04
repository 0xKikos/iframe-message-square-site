import { Outlet } from 'react-router'
// import { useMessageListener } from '@/hooks/useMessageListener'

const Layout = () => {
  // useMessageListener()

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout