import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ReviewPurchasePage from './pages/ReviewPurchasePage'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ReviewPurchasePage />} />
        <Route/>
        <Route/>
      </Routes>  
    
    </BrowserRouter>


    </>
  )
}

export default App
