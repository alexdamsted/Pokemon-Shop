import Image from "next/image";
import Link from "next/link";

function Logo({ text }) {
  return (
    <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
      <Link href="/">
        <Image src="/pokeball-48.png" alt="pokeball" width="48" height="48" />
      </Link>
      <Link href="/">
        <h1 className="text-black text-2xl font-bold md:m-0">{text}</h1>
      </Link>
    </div>
  );
}

export default Logo;
