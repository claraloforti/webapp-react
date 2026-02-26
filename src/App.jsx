import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import MovieDetailPage from "./pages/MovieDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import { GlobalProvider } from "./contexts/GlobalContext"


function App() {

  return (
    <GlobalProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
