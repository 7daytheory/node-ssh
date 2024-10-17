//Import layout
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={
              <>
                <div className="flex items-center justify-center min-h-screen">
                  <p className="text-center">Content received from Node Server Coming Soon!</p>
                </div>
              </>
            } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
