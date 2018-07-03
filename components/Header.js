import Link from 'next/link';

const Header = () => (
  <header>
    <h1>Neverbuild</h1>
    <nav>
      <Link
        href="/"
        prefetch
      >
        <a>Home</a>
      </Link>
      <Link
        href="/about"
        prefetch
      >
        <a>About</a>
      </Link>
    </nav>
  </header>
);

export default Header;
