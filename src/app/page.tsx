import CallToAction from '@/components/CallToAction';
import CaseStudies from '@/components/CaseStudies';
import Content from '@/components/Content';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="text-primary scroll-smooth">
      <Hero />
      <Content />
      <CallToAction />
      <CaseStudies />
    </main>
  );
}
