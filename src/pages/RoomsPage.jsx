import RoomCard from '../components/common/RoomCard';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';
import { roomsData } from '../data/roomsData';

function RoomsPage() {
  return (
    <>
      <SEO
        title="Rooms & Suites | Royal Haven"
        description="Explore premium suites and elegant rooms designed for comfort and elevated living."
        keywords="luxury rooms, hotel suites, premium stay"
        canonical="https://www.royalhaven.com/rooms"
      />
      <section className="section-space">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Rooms" title="Signature Suites & Refined Comfort" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roomsData.map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
