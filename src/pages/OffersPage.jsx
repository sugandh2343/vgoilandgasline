import OfferCard from '../components/common/OfferCard';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';
import { offersData } from '../data/offersData';

function OffersPage() {
  return (
    <>
      <SEO
        title="Special Offers | Royal Haven"
        description="Explore exclusive seasonal packages and premium offers crafted for indulgent stays and events."
        keywords="hotel deals, special offers, wedding packages"
        canonical="https://www.royalhaven.com/offers"
      />
      <section className="section-space">
        <div className="container-luxury space-y-10">
          <SectionHeading center eyebrow="Offers" title="Curated Luxury Packages" />
          <div className="grid gap-6 lg:grid-cols-3">
            {offersData.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default OffersPage;
