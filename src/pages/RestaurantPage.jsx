import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';

function RestaurantPage() {
  return (
    <>
      <SEO
        title="Sky View Restaurant | Royal Haven"
        description="Experience rooftop fine dining with handcrafted menus and panoramic skyline views."
        keywords="sky view restaurant, rooftop dining, fine dining"
        canonical="https://www.royalhaven.com/restaurant"
      />
      <section className="section-space">
        <div className="container-luxury grid gap-10 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80" alt="Rooftop dining" className="h-[500px] rounded-2xl object-cover shadow-luxury" />
          <div>
            <SectionHeading eyebrow="Sky Dining" title="Culinary Art Above the City Lights" description="Our chefs design immersive tasting journeys featuring global flavors, local ingredients, and exceptional presentation." />
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-luxury">
              <h3 className="text-xl text-primary">Signature Highlights</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-dark/80">
                <li>Sunset degustation menus</li>
                <li>Live jazz evenings</li>
                <li>Private rooftop celebration zones</li>
                <li>Artisan desserts and cocktail bar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RestaurantPage;
