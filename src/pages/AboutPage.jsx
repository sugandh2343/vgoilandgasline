import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/seo/SEO';

function AboutPage() {
  return (
    <>
      <SEO
        title="About Royal Haven | Legacy of Luxury"
        description="Learn about Royal Haven's heritage, philosophy, and commitment to bespoke hospitality."
        keywords="about royal haven, luxury hospitality, premium hotel story"
        canonical="https://www.royalhaven.com/about"
      />
      <section className="section-space">
        <div className="container-luxury grid gap-10 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80" alt="Hotel exterior" className="h-[460px] rounded-2xl object-cover shadow-luxury" />
          <div>
            <SectionHeading eyebrow="Our Story" title="A Heritage Destination Reimagined for Modern Luxury" />
            <p className="mt-6 text-sm leading-relaxed text-dark/80">Royal Haven was envisioned as a destination where opulence meets warmth. From grand weddings to elegant business stays, every journey is personalized with gracious service and refined detail.</p>
            <p className="mt-4 text-sm leading-relaxed text-dark/80">Our interiors, dining experiences, and event venues are thoughtfully curated to create an atmosphere that feels timeless, cinematic, and truly memorable.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
