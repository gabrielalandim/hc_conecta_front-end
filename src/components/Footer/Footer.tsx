import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-orange-500 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Central de Atendimento</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaPhone size={20} />
            <span className="text-lg">(11) 2661-0000</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp size={20} />
            <span className="text-lg">(19) 3521-2121</span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Redes Sociais</h3>
          <div className="flex gap-5">
            <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebook size={28} /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={28} /></a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80"><FaYoutube size={28} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><FaLinkedin size={28} /></a>
          </div>
        </div>

        <div className="bg-sky-600 p-4 rounded-lg flex items-center gap-4">
          <div className="text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-lg">Acesse o app Portal do Paciente HC</p>
            <div className="flex gap-2 mt-2">
              <a href="#" className="hover:opacity-80"><SiGoogleplay size={30} /></a>
              <a href="#" className="hover:opacity-80"><SiAppstore size={30} /></a>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center border-t border-white/20 mt-8 pt-4">
        <p>© 2025 Saúde Digital - Hospital das Clínicas FMUSP</p>
      </div>
    </footer>
  );
}