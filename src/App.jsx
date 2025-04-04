import { BrowserRouter, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from "./Components/Home"
import AboutUs from "./Components/About"
import ContactUs from "./Components/ContactUs"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"

import VenueDetails from "./Components/Venue"
import InvoicePage from "./Components/InvoicePage"


function App() {
  

  return (
    <>
      
      
      {/* <BrowserRouter>
       <Routes>
        <Route>
          <Route/>
         
        </Route>
       </Routes>
      </BrowserRouter> */}
      {/* <AboutUs/> */}
      <br></br>
      {/* <ContactUs/> */}
      <br></br>
      {/* <Login/> */}
      <br></br>
      {/* <SignUp/> */}
      <br></br>
      
      {/* <VenueDetails/> */}

      <br></br>
      <InvoicePage/>

      
    </>
  )
}

export default App
