import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <menubar/>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route   path="/allproducts"     element={<ShowProducts /> }      />
            <Route  path="/addproduct"     element={<AddProduct /> }      />
          </Routes>
      </Router>
    </>
  )
}

export default App
