function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl bg-white p-6 shadow-luxury sm:grid-cols-2">
      <input type="text" placeholder="Full Name" className="rounded-lg border border-dark/15 px-4 py-3 text-sm focus:border-secondary focus:outline-none sm:col-span-1" />
      <input type="email" placeholder="Email Address" className="rounded-lg border border-dark/15 px-4 py-3 text-sm focus:border-secondary focus:outline-none sm:col-span-1" />
      <input type="tel" placeholder="Phone Number" className="rounded-lg border border-dark/15 px-4 py-3 text-sm focus:border-secondary focus:outline-none sm:col-span-1" />
      <input type="date" className="rounded-lg border border-dark/15 px-4 py-3 text-sm focus:border-secondary focus:outline-none sm:col-span-1" />
      <textarea rows="5" placeholder="Share your requirement" className="rounded-lg border border-dark/15 px-4 py-3 text-sm focus:border-secondary focus:outline-none sm:col-span-2" />
      <button type="button" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-background transition hover:bg-secondary hover:text-primary sm:col-span-2">
        Submit Enquiry
      </button>
    </form>
  );
}

export default ContactForm;
