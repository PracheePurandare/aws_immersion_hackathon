import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Registration from './pages/Registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* basename="/2025/aws/immersion_hackathon/" */}
      <Router basename="/2025/aws/immersion_hackathon/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="Registration" element={<Registration />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
