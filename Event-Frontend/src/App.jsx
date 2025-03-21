import { BrowserRouter, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from "./Components/Home"


function App() {
  

  return (
    <>
      <h1>Welcome to React!</h1>
      <BrowserRouter>
       <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<h2>About Us</h2>} />
          <Route path="contact" element={<h2>Contact Us</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} /> */}
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
