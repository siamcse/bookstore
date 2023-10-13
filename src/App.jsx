import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import ScrollToTop from "./components/ScroolToTop"

function App() {

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
