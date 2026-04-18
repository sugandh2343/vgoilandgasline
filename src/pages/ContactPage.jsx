import ContactForm from '../components/contact/ContactForm';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Royal Haven"
        description="Connect with Royal Haven for bookings, weddings, banquets, and personalized luxury stays."
        keywords="contact hotel, booking enquiry, banquet contact"
        canonical="https://www.royalhaven.com/contact"
      />
      <section className="section-space">
        <div className="container-luxury grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="Let's Curate Your Perfect Experience" description="Our guest relations specialists are available to assist with reservations, events, and customized travel plans." />
            <p className="mt-5 text-sm text-dark/80">Phone: +1 212 555 7020</p>
            <p className="mt-2 text-sm text-dark/80">Email: reservations@royalhaven.com</p>
            <p className="mt-2 text-sm text-dark/80">Address: 22 Imperial Avenue, New York</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
