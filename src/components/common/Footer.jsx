import { Facebook, Instagram, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-background">
      <div className="container-luxury grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl text-secondary">Royal Haven</h3>
          <p className="mt-4 text-sm text-background/70">An elevated destination for luxury stays, curated events, and unforgettable celebrations.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-secondary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><Link to="/rooms" className="hover:text-secondary">Rooms</Link></li>
            <li><Link to="/banquet" className="hover:text-secondary">Banquets</Link></li>
            <li><Link to="/restaurant" className="hover:text-secondary">Restaurant</Link></li>
            <li><Link to="/offers" className="hover:text-secondary">Offers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-secondary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="inline-flex items-center gap-2"><MapPin size={14} /> 22 Imperial Avenue, New York</li>
            <li className="inline-flex items-center gap-2"><Phone size={14} /> +1 212 555 7020</li>
            <li className="inline-flex items-center gap-2"><Send size={14} /> reservations@royalhaven.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-secondary">Follow</h4>
          <div className="mt-4 flex gap-3">
            <button type="button" className="rounded-full border border-background/30 p-2 hover:border-secondary hover:text-secondary"><Instagram size={16} /></button>
            <button type="button" className="rounded-full border border-background/30 p-2 hover:border-secondary hover:text-secondary"><Facebook size={16} /></button>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-xs text-background/60">© {new Date().getFullYear()} Royal Haven Hotel & Banquets. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
