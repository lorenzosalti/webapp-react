import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:id" element={<div>MovieDetail</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
