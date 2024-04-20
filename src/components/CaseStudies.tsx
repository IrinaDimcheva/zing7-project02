import Image from 'next/image';

export default function CaseStudies() {
  return (
    <section className="max-w-screen-wide m-auto pb-32 max-xl:px-8">
      <Image
        src="/case-studies.svg"
        alt="case studies"
        width={1296}
        height={364}
      />
    </section>
  );
}
