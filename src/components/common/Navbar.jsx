import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import CTAButton from './CTAButton';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Banquet', path: '/banquet' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Offers', path: '/offers' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${transparent ? 'bg-transparent' : 'bg-white/95 shadow-md backdrop-blur'}`}>
      <nav className="container-luxury flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-wide text-primary">Royal Haven</Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] transition ${isActive ? 'text-secondary' : `${transparent ? 'text-background' : 'text-dark'} hover:text-secondary`}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CTAButton to="/booking">Book Now</CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`rounded p-2 lg:hidden ${transparent ? 'text-background' : 'text-primary'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-dark/10 bg-white px-4 pb-6 pt-4 lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm font-medium uppercase tracking-[0.14em] text-dark transition hover:text-secondary">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <CTAButton to="/booking" className="mt-5 w-full">Book Now</CTAButton>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
