import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CTAButton from '../components/common/CTAButton';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';
import { roomsData } from '../data/roomsData';

function RoomDetailsPage() {
  const { roomId } = useParams();
  const room = useMemo(() => roomsData.find((item) => item.id === roomId) ?? roomsData[0], [roomId]);

  return (
    <>
      <SEO
        title={`${room.name} | Royal Haven`}
        description={room.description}
        keywords={`hotel room, ${room.name}, luxury stay`}
        canonical={`https://www.royalhaven.com/rooms/${room.id}`}
      />
      <section className="section-space">
        <div className="container-luxury grid gap-10 lg:grid-cols-2">
          <img src={room.image} alt={room.name} className="h-[500px] rounded-2xl object-cover shadow-luxury" />
          <div>
            <SectionHeading eyebrow="Room Details" title={room.name} description={room.description} />
            <ul className="mt-6 grid gap-3 text-sm text-dark/80">
              <li><strong>Room Size:</strong> {room.size}</li>
              <li><strong>Guests:</strong> Up to {room.guests}</li>
              <li><strong>Bed Type:</strong> {room.bed}</li>
              <li><strong>Price:</strong> ${room.price} per night</li>
            </ul>
            <h3 className="mt-8 text-xl text-primary">Included Amenities</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-dark/80">
              {room.amenities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="mt-8"><CTAButton to="/booking">Book This Room</CTAButton></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomDetailsPage;
