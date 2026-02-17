import HeroBanner from '@/components/home/HeroBanner';
import FeaturedVehicles from '@/components/home/FeaturedVehicles';
import AboutPreview from '@/components/home/AboutPreview';
import CTASection from '@/components/home/CTASection';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedVehicles />
      <AboutPreview />
      <CTASection />
      <Testimonials />
    </>
  );
}
