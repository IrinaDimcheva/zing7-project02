import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-slate-gray w-100 py-28 my-24 text-center">
      <div className="max-w-screen-md m-auto max-sm:p-8">
        <h2 className="text-7xl leading-[77px] text-white font-semibold tracking-tight max-sm:text-5xl">
          Готови ли сте да работим заедно?
        </h2>
        <p className="text-white px-24 py-8 tracking-wider">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        <div className="flex justify-center ml-12">
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
