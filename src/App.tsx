import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className='app p-5 text-foreground min-h-screen flex flex-col justify-between'>
      <Header />
      <main className='mx-auto max-w-screen-lg'>
        <div className="mt-3 text-center">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="text-lg mt-2">{t('welcome')}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
