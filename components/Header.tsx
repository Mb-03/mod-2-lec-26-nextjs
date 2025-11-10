import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="space-x-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="/sign-in
        "
        >
          Sign In
        </Link>
      </nav>
    </div>
  );
};

export default Header;
