import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export function Header() {
  return (
    <header className="bg-sky-600 text-white p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-3xl font-bold">
        HC CONECTA
      </Link>

      <div className="relative w-1/3 max-w-xs hidden md:block">
        <input
          type="text"
          placeholder="Procure aqui"
          className="bg-white text-gray-800 w-full py-2 px-4 rounded-full focus:outline-none"
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/integrantes" className="hover:underline">Equipe</Link>
        <Link to="/sobre" className="hover:underline">Sobre</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/contato" className="hover:underline">Contato</Link>
        
        <Link 
          to="/login"
          className="bg-teal-400 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-500"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}