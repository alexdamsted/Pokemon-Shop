import Image from "next/image";

function Logo({ text }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Image src="/pokeball-48.png" alt="pokeball" width="48" height="48" />
      <h1 className="text-black text-2xl font-bold md:m-0">{text}</h1>
    </div>
  );
}

export default Logo;
