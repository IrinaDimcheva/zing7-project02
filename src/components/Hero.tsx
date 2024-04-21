import Image from 'next/image';

export default function Hero() {
  return (
    <div className="max-w-screen-xl px-8 py-16 m-auto lg:px-32 md:px-16 flex flex-col gap-16">
      <h1 className="font-semibold text-4xl lg:leading-[77px] text-center tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Гъвкави решения за сухопътен транспорт за всеки клиент
      </h1>
      <div className="m-auto">
        <Image src="/track.svg" alt="track" width={969} height={690} />
      </div>
    </div>
  );
}
