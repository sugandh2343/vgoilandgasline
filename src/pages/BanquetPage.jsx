import CTAButton from '../components/common/CTAButton';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';

function BanquetPage() {
  return (
    <>
      <SEO
        title="Banquet Halls | Royal Haven"
        description="Host weddings, receptions, and gala events in luxurious banquet venues at Royal Haven."
        keywords="banquet halls, wedding venue, luxury events"
        canonical="https://www.royalhaven.com/banquet"
      />
      <section className="section-space">
        <div className="container-luxury grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Banquet" title="Grand Venues for Unforgettable Events" description="From elegant engagement ceremonies to lavish wedding receptions, our venue team curates every detail with precision and flair." />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-dark/80">
              <li>Capacity up to 900 guests</li>
              <li>Custom décor and floral design</li>
              <li>Live cuisine counters and curated menus</li>
              <li>Dedicated event specialists</li>
            </ul>
            <div className="mt-8"><CTAButton to="/booking">Plan Your Event</CTAButton></div>
          </div>
          <img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1400&q=80" alt="Banquet hall interior" className="h-[500px] rounded-2xl object-cover shadow-luxury" />
        </div>
      </section>
    </>
  );
}

export default BanquetPage;
