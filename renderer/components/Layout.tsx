import { Children } from "react"
import Header from "./Header"

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
