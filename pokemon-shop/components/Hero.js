import Image from "next/image";

const Hero = () => {
  return (
    <div className="hidden relative lg:flex lg:pt-40 xl:pt-52 2xl:pt-28">
      <Image
        src="/pokemon-shop-banner.jpeg"
        alt="banner image"
        width="3000"
        height="1100"
      />
    </div>
  );
};

export default Hero;
