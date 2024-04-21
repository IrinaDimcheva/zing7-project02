import Image from 'next/image';

export default function Header() {
  return (
    <header className="px-8 py-6 max-w-screen-wide m-auto">
      <nav className="text-primary flex justify-between items-center">
        <a href="/" className="font-space-grotesk font-bold text-3xl">
          Website
        </a>
        <div>
          <button className="lg:hidden">
            <Image
              src="/hamburger-menu.svg"
              alt="menu icon"
              width={32}
              height={24}
            />
          </button>
        </div>
        <div className="max-lg:hidden flex justify-between gap-24 max-xl:gap-8">
          <ul className="flex justify-between items-center">
            <li>
              <a
                href="/"
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50"
              >
                Начало
              </a>
            </li>
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                За нас
              </a>
            </li>
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Услуги
              </a>
            </li>
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Цени
              </a>
            </li>
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Как работи
              </a>
            </li>
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Контакти
              </a>
            </li>
          </ul>
          <ul className="flex justify-end items-center gap-8">
            <li>
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Профил
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold px-6 py-4 rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all ease-in-out"
              >
                Заявка за пратка
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
