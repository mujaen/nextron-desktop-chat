import { Children } from 'react'
import Header from './Header'

function Layout({ children }: any) {
  return (
    <div className="flex">
      <Header />
      <div className="w-[calc(100%-4rem)] p-3">{children}</div>
    </div>
  )
}

export default Layout
