import { BedDouble, Maximize, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-luxury transition-transform duration-300 hover:-translate-y-1">
      <img src={room.image} alt={room.name} className="h-64 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-primary">{room.name}</h3>
          <p className="text-sm font-semibold text-secondary">${room.price}/night</p>
        </div>
        <p className="text-sm text-dark/70">{room.description}</p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wide text-dark/60">
          <span className="inline-flex items-center gap-1"><Maximize size={14} /> {room.size}</span>
          <span className="inline-flex items-center gap-1"><Users size={14} /> {room.guests} Guests</span>
          <span className="inline-flex items-center gap-1"><BedDouble size={14} /> {room.bed}</span>
        </div>
        <Link to={`/rooms/${room.id}`} className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary transition hover:text-secondary">
          Discover Room
        </Link>
      </div>
    </article>
  );
}

export default RoomCard;
