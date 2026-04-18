import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CTAButton from './CTAButton';

function HeroBanner({ slides }) {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="relative h-full">
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-luxury-gradient" />
              <div className="container-luxury relative flex h-full items-center">
                <div className="max-w-2xl text-background">
                  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary">{slide.tag}</p>
                  <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{slide.title}</h1>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/90 sm:text-base">{slide.subtitle}</p>
                  <div className="mt-8 flex gap-4">
                    <CTAButton to="/booking">Reserve Your Stay</CTAButton>
                    <CTAButton to="/gallery" className="bg-transparent text-secondary hover:bg-secondary hover:text-primary">
                      View Gallery
                    </CTAButton>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroBanner;
