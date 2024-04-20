import Image from 'next/image';

export default function Hero() {
  return (
    <div className="max-w-screen-xl px-32 py-16 m-auto max-lg:px-16 max-md:px-8 flex flex-col gap-16">
      <h1 className="font-semibold text-7xl leading-[77px] text-center tracking-tight max-sm:text-4xl max-md:text-5xl max-lg:text-6xl">
        Гъвкави решения за сухопътен транспорт за всеки клиент
      </h1>
      <div className="m-auto">
        <Image src="/track.svg" alt="track" width={969} height={690} />
      </div>
    </div>
  );
}
