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
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Начало
              </a>
            </li>
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-lg border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                За нас
              </a>
            </li>
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Услуги
              </a>
            </li>
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Цени
              </a>
            </li>
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Как работи
              </a>
            </li>
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Контакти
              </a>
            </li>
          </ul>
          <ul className="flex justify-end items-center gap-8">
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md border-2 border-transparent hover:bg-slate-50 hover:border-primary"
              >
                Профил
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold px-6 py-4 rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white hover:transition-all ease-in-out"
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
