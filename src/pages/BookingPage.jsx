import ContactForm from '../components/contact/ContactForm';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';

function BookingPage() {
  return (
    <>
      <SEO
        title="Booking & Enquiry | Royal Haven"
        description="Submit your booking request for stays, celebrations, and premium event experiences at Royal Haven."
        keywords="hotel booking, room reservation, banquet enquiry"
        canonical="https://www.royalhaven.com/booking"
      />
      <section className="section-space">
        <div className="container-luxury">
          <SectionHeading center eyebrow="Book Now" title="Reserve Your Stay or Event" description="Share your travel dates or event requirements and our team will respond with a tailored proposal." />
          <div className="mx-auto mt-8 max-w-4xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingPage;
