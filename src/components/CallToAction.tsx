import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-slate-gray w-100 py-16 sm:py-28 my-24 text-center">
      <div className="max-w-screen-md m-auto max-sm:my-16 max-sm:p-8">
        <h2 className="text-4xl  text-white font-semibold tracking-tight sm:text-5xl lg:text-7xl lg:leading-[77px]">
          Готови ли сте да работим заедно?
        </h2>
        <p className="text-white sm:px-24 py-8 tracking-wider max-sm:text-sm">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        <div className="flex justify-center px-8 m-4 ml-12">
          <Image
            src="/envelope.svg"
            alt="envelope icon"
            width={16}
            height={16}
            className="opacity-40 -m-8"
          />
          <input
            type="text"
            placeholder="Мобилен телефон"
            className="pl-12 rounded-l-lg outline-none"
          />
          <button className="px-8 py-4 bg-lemon rounded-r-lg"> Изпрати</button>
        </div>
      </div>
    </section>
  );
}
