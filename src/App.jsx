import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./pages/Movies"
import MovieDetailPage from "./pages/MovieDetail"
import DefaultLayout from "./layouts/DefaultLayout"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false)


  return (
    <>
      <GlobalContext.Provider value={{
        isLoading,
        setIsLoading
      }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<div>HomePage</div>} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MovieDetailPage />} />
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
