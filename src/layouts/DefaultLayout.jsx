import { Outlet } from "react-router-dom"
import Header from "../components/Header"


function DefaultLayout() {


  return (
    <>
      <Header />
      <main className="mb-4">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout