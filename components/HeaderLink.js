// Components
import Link from 'next/link';

const HeaderLink = ({ name, href }) => (
  <Link href={href} prefetch>
    <a>{name}</a>
  </Link>
);

export default HeaderLink;
