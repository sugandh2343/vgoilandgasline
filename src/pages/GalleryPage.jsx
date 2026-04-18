import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import GalleryCard from '../components/common/GalleryCard';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';
import { galleryData } from '../data/galleryData';

function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | Royal Haven"
        description="View curated images of our luxury rooms, banquet halls, dining, and celebration experiences."
        keywords="hotel gallery, banquet photos, luxury interiors"
        canonical="https://www.royalhaven.com/gallery"
      />
      <section className="section-space">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Gallery" title="Discover the Royal Haven Experience" />
          <Swiper modules={[Autoplay]} autoplay={{ delay: 2600, disableOnInteraction: false }} spaceBetween={20} breakpoints={{ 320: { slidesPerView: 1.2 }, 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }}>
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}><GalleryCard item={item} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
