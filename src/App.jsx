import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ReviewPurchasePage from './pages/ReviewPurchasePage'
import ReviewSubmitPage from './pages/ReviewSubmitPage'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ReviewPurchasePage />} />
        <Route path="/review-submitted" element={<ReviewSubmitPage />} />
        <Route/>
      </Routes>  
    
    </BrowserRouter>


    </>
  )
}

export default App
