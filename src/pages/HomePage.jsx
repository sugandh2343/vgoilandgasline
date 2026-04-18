import { motion } from 'framer-motion';
import { ConciergeBell, Dumbbell, Sparkles, UtensilsCrossed, WavesLadder, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/common/CTAButton';
import GalleryCard from '../components/common/GalleryCard';
import HeroBanner from '../components/common/HeroBanner';
import OfferCard from '../components/common/OfferCard';
import RoomCard from '../components/common/RoomCard';
import SectionHeading from '../components/common/SectionHeading';
import TestimonialCard from '../components/common/TestimonialCard';
import SEO from '../components/seo/SEO';
import { galleryData } from '../data/galleryData';
import { offersData } from '../data/offersData';
import { roomsData } from '../data/roomsData';
import { testimonialsData } from '../data/testimonialsData';

const heroSlides = [
  {
    id: 1,
    title: 'A Signature Retreat of Luxury & Elegance',
    subtitle: 'Experience bespoke hospitality, refined interiors, and iconic city views in every stay.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80',
    tag: 'Royal Haven Hotel',
  },
  {
    id: 2,
    title: 'Curated Banquets for Grand Celebrations',
    subtitle: 'From intimate vows to lavish receptions, every event is crafted with timeless sophistication.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80',
    tag: 'Banquet & Weddings',
  },
  {
    id: 3,
    title: 'Skyline Dining with Exquisite Flavors',
    subtitle: 'Discover culinary artistry and sunset ambience at our sky view restaurant.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80',
    tag: 'Sky View Restaurant',
  },
];

const amenities = [
  { icon: Wifi, name: 'High-Speed WiFi' },
  { icon: WavesLadder, name: 'Infinity Pool' },
  { icon: Dumbbell, name: 'Modern Fitness Club' },
  { icon: ConciergeBell, name: '24/7 Concierge' },
  { icon: UtensilsCrossed, name: 'Fine Dining' },
  { icon: Sparkles, name: 'Luxury Spa' },
];

function HomePage() {
  return (
    <>
      <SEO
        title="Royal Haven | Luxury Hotel, Banquets & Wedding Venue"
        description="Discover a premium hotel experience with regal rooms, grand banquet halls, skyline dining, and curated celebrations."
        keywords="luxury hotel, banquet hall, wedding venue, premium rooms, sky view restaurant"
        canonical="https://www.royalhaven.com/"
      />

      <HeroBanner slides={heroSlides} />

      <section className="section-space">
        <div className="container-luxury grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Welcome to Royal Haven" title="Where Hospitality Becomes an Art Form" description="Crafted for discerning travelers and unforgettable events, Royal Haven blends heritage grandeur with contemporary indulgence." />
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80" alt="Luxury hotel lobby" className="h-[420px] w-full rounded-2xl object-cover shadow-luxury" />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Rooms & Suites" title="Elegant Spaces for Every Stay" description="Choose from our refined collection of suites and rooms, designed to offer comfort wrapped in timeless luxury." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roomsData.map((room) => <RoomCard key={room.id} room={room} />)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-luxury grid gap-8 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80" alt="Banquet hall" className="h-[420px] rounded-2xl object-cover shadow-luxury" />
          <div className="flex flex-col justify-center">
            <SectionHeading eyebrow="Banquet Hall" title="An Iconic Venue for Timeless Celebrations" description="Host weddings, receptions, and grand social events in versatile halls with bespoke décor and gourmet menus." />
            <div className="mt-6"><CTAButton to="/banquet">Explore Banquet</CTAButton></div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-luxury grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <SectionHeading eyebrow="Restaurant & Sky View" title="Elevated Dining with Skyline Ambience" description="Enjoy handcrafted global cuisine and artisan beverages under city lights in our rooftop signature restaurant." />
            <div className="mt-6"><CTAButton to="/restaurant">View Restaurant</CTAButton></div>
          </div>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80" alt="Sky view restaurant" className="order-1 h-[420px] rounded-2xl object-cover shadow-luxury lg:order-2" />
        </div>
      </section>

      <section className="section-space">
        <div className="container-luxury">
          <SectionHeading center eyebrow="Amenities" title="Thoughtful Luxuries at Every Turn" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <motion.article key={amenity.name} whileHover={{ y: -3 }} className="rounded-2xl bg-white p-6 shadow-luxury">
                <amenity.icon className="text-secondary" size={26} />
                <h3 className="mt-4 text-lg text-primary">{amenity.name}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Gallery" title="Moments of Grandeur" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.slice(0, 6).map((item) => <GalleryCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Guest Stories" title="What Our Guests Cherish" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialsData.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Exclusive Offers" title="Handpicked Packages for Elevated Experiences" />
          <div className="grid gap-6 lg:grid-cols-3">
            {offersData.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-luxury rounded-2xl bg-primary px-6 py-12 text-center text-background sm:px-10">
          <h2 className="text-3xl sm:text-4xl">Plan Your Luxury Escape or Signature Event</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-background/90">Our hospitality experts are ready to craft your perfect getaway, wedding, or celebration.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <CTAButton to="/booking">Book Now</CTAButton>
            <CTAButton to="/contact" className="bg-transparent text-secondary hover:bg-secondary hover:text-primary">Contact Team</CTAButton>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <SectionHeading center eyebrow="Locate Us" title="In the Heart of the City" />
          <div className="mt-8 overflow-hidden rounded-2xl shadow-luxury">
            <iframe
              title="Royal Haven Location"
              src="https://www.google.com/maps?q=Times+Square,+New+York&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
