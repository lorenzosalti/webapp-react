import { Outlet } from "react-router-dom"
import Header from "../components/Header"

import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import Loading from "../components/Loading"


function DefaultLayout() {

  const { isLoading } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <main className="mb-4">
        {isLoading && <Loading />}
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout