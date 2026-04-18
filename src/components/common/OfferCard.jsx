function OfferCard({ offer }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-luxury">
      <img src={offer.image} alt={offer.title} className="h-56 w-full object-cover" />
      <div className="space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{offer.discount}</p>
        <h3 className="text-2xl text-primary">{offer.title}</h3>
        <p className="text-sm text-dark/70">{offer.description}</p>
      </div>
    </article>
  );
}

export default OfferCard;
