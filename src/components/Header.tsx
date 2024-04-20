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
          <ul className="flex justify-between items-center gap-8">
            <li>
              <a href="/">Начало</a>
            </li>
            <li>
              <a href="/">За нас</a>
            </li>
            <li>
              <a href="/">Услуги</a>
            </li>
            <li>
              <a href="/">Цени</a>
            </li>
            <li>
              <a href="/">Как работи</a>
            </li>
            <li>
              <a href="/">Контакти</a>
            </li>
          </ul>
          <ul className="flex justify-end items-center gap-8">
            <li>
              <a href="/">Профил</a>
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
