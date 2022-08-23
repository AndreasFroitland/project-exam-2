import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/hotel-results">
          <a>Hotels</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <div className="container">{children}</div>
    </>
 );
}