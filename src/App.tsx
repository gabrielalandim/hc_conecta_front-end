import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 flex flex-col">
      
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default App