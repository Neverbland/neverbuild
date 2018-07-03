import Link from 'next/link';

const Header = () => (
  <header>
    <h1>Neverbuild</h1>
    <nav>
      <Link
        href="/"
        prefetch
      >
        Home
      </Link>
      <Link
        href="/about"
        prefetch
      >
        About
      </Link>
    </nav>
  </header>
);

export default Header;
