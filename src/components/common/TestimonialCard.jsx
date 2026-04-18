import { Quote } from 'lucide-react';

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-luxury">
      <Quote className="text-secondary" size={26} />
      <p className="mt-4 text-sm leading-relaxed text-dark/80">{testimonial.quote}</p>
      <h3 className="mt-6 text-lg text-primary">{testimonial.name}</h3>
      <p className="text-xs uppercase tracking-[0.2em] text-dark/50">{testimonial.role}</p>
    </article>
  );
}

export default TestimonialCard;
