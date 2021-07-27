import Image from "next/image";

function Logo({ text }) {
  return (
    <div className="flex gap-2">
      <Image src="/../public/pokeball-48.png" width="48" height="48" />
      <h1 className="my-10 text-black text-2xl font-bold md:m-0 lg:text-2xl">
        {text}
      </h1>
    </div>
  );
}

export default Logo;
