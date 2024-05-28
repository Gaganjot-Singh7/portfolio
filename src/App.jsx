
import { Outlet } from 'react-router-dom'

import Header from "./comp/Header.jsx";
import Footer from "./comp/Footer.jsx";


function App() {


  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </>
  )
}

export default App
