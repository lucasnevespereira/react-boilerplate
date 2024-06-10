import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app bg-background text-foreground min-h-screen flex flex-col justify-between'>
      <Header />
      <main>
        <p>toto</p>
      </main>
      <Footer />
    </div>
  )
}

export default App
