function GalleryCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl">
      <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
      <div className="absolute bottom-0 p-5 text-background">
        <p className="text-xs uppercase tracking-[0.25em] text-secondary">{item.category}</p>
        <h3 className="mt-2 text-xl">{item.title}</h3>
      </div>
    </article>
  );
}

export default GalleryCard;
