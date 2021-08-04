import Image from "next/image";
import Link from "next/link";

function Logo({ text }) {
  return (
    <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
      <Link href="/" passHref>
        <a>
          <Image src="/pokeball-48.png" alt="pokeball" width="48" height="48" />
        </a>
      </Link>

      <Link href="/" passHref>
        <h1 className="text-black text-lg font-montserrat font-semibold md:m-0">
          {text}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
