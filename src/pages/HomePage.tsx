import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Trusted Local Web Partners"
      title="We Build Websites That Grow Your Local Business"
      description="Professional web creation and maintenance for businesses in Clarksville and Nashville. Focus on your business, we'll handle the digital presence."
      primaryButton={{
        text: "Call Now: (615) 852-8670",
        href: "tel:6158528670",
      }}
      secondaryButton={{
        text: "View Our Services",
        href: "#services",
      }}
      imageSrc="https://images.pexels.com/photos/8297863/pexels-photo-8297863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Local & Family Run"
      title="Why Choose RedlineWebCo?"
      description="We are a Clarksville-based family team dedicated to helping our neighbors succeed online. Unlike big agencies, we know your name, we know our community, and we provide personalized updates every month."
      imageSrc="https://images.pexels.com/photos/4623195/pexels-photo-4623195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesTaggedCards
      tag="Our Services"
      title="Everything Your Business Needs"
      description="We don't just build your site; we keep it running, updating, and working for you so you never have to worry."
      items={[
        {
          tag: "Build",
          title: "Custom Web Design",
          description: "Beautiful, responsive websites built to turn visitors into local customers.",
          primaryButton: {
            text: "Get a Quote",
            href: "#contact",
          },
          imageSrc: "https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          tag: "Maintain",
          title: "Full Site Maintenance",
          description: "Regular security updates, performance monitoring, and uptime management.",
          primaryButton: {
            text: "Get a Quote",
            href: "#contact",
          },
          imageSrc: "https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          tag: "Update",
          title: "Monthly Content Updates",
          description: "3 free small changes per month—hours, services, images, and more.",
          primaryButton: {
            text: "Get a Quote",
            href: "#contact",
          },
          imageSrc: "https://images.pexels.com/photos/7709273/pexels-photo-7709273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="maintenance" data-section="maintenance">
    <SectionErrorBoundary name="maintenance">
          <MetricsSimpleCards
      tag="Maintenance Plan"
      title="Service Peace of Mind"
      description="We offer more than just a website—we offer reliable support for your growing business."
      metrics={[
        {
          value: "3",
          description: "Monthly updates included",
        },
        {
          value: "9am-5pm",
          description: "Responsive support hours",
        },
        {
          value: "Clarksville",
          description: "Service Area Coverage",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Local Trust"
      title="What Our Partners Say"
      description="Local business owners in Clarksville and Nashville trust us for their web needs."
      testimonials={[
        {
          name: "John Miller",
          role: "Owner, Miller Landscaping",
          quote: "RedlineWebCo made our business look professional. The monthly updates are a game changer.",
          imageSrc: "https://images.pexels.com/photos/16322150/pexels-photo-16322150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Sarah Jenkins",
          role: "Bistro Owner",
          quote: "Finally, someone who understands local business needs. Fast, reliable, and friendly.",
          imageSrc: "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David Clark",
          role: "Contractor",
          quote: "Their maintenance plan is worth every penny. I haven't had to touch my site in months.",
          imageSrc: "https://images.pexels.com/photos/38758071/pexels-photo-38758071.png?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena Rodriguez",
          role: "Creative Studio",
          quote: "Beautiful design, great support. Exactly what I needed for my new studio.",
          imageSrc: "https://images.pexels.com/photos/13891792/pexels-photo-13891792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Mark Stevens",
          role: "Small Retail Shop",
          quote: "Professional and local. Great to have a team I can call directly.",
          imageSrc: "https://images.pexels.com/photos/6888761/pexels-photo-6888761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Questions"
      title="Need Help? Let's Talk."
      categories={[
        {
          name: "Updates",
          items: [
            {
              question: "What counts as a small update?",
              answer: "Small updates include changing your service hours, updating phone numbers, adding new services, or replacing images.",
            },
            {
              question: "Can I request more than 3 updates?",
              answer: "Yes! Additional updates can be handled for a small fee.",
            },
          ],
        },
        {
          name: "Service Area",
          items: [
            {
              question: "Do you only work in Clarksville?",
              answer: "We serve Clarksville, Nashville, and all surrounding areas!",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
      description="We're here to make managing your digital presence simple and straightforward."
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to transform your business presence? Call us today or request a quote."
      primaryButton={{
        text: "Call Now: (615) 852-8670",
        href: "tel:6158528670",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:redlinewebco@gmail.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
