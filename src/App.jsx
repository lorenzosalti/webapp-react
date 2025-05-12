import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./pages/Movies"
import MovieDetailPage from "./pages/MovieDetail"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
