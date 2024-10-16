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
                Content inside coming soon!
              </>
            } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
