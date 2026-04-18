import { Link } from 'react-router-dom';

function CTAButton({ children, to = '/booking', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border border-secondary bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-secondary ${className}`}
    >
      {children}
    </Link>
  );
}

export default CTAButton;
