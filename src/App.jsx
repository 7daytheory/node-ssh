import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navigation />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
