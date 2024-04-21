import Image from 'next/image';

export default function CaseStudies() {
  return (
    <section className="max-w-screen-wide m-8 pb-32">
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
        Други услуги
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-12 max-w-[1296px]">
        <div className="w-full transition-all hover:scale-105">
          <Image
            src="/1.svg"
            alt="case studies"
            width={416}
            height={364}
            className="object-contain"
          />
        </div>
        <div className="w-full transition-all hover:scale-105">
          <Image
            src="/2.svg"
            alt="case studies"
            width={416}
            height={364}
            className="object-contain"
          />
        </div>
        <div className="w-full transition-all hover:scale-105">
          <Image
            src="/3.svg"
            alt="case studies"
            width={416}
            height={364}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
