import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./pages/Movies"
import MovieDetailPage from "./pages/MovieDetail"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
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
    </>
  )
}

export default App
