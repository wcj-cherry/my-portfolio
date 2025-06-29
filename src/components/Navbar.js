import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav
      className={`p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md flex justify-between`}
    >
      <div className="font-bold text-lg">Portfolio</div>
      <div className={`${styles.links} space-x-4`}>
        <Link href="/">Home</Link>
       {/* <Link href="/about">About</Link>*/}
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
