import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-[210px] relative">
      {/* hero title */}
      <div className="pr-4.5">
        <h1 className="hero-title flex flex-col gap-10 items-center">
          <span className="mb-3.5">
            Ain&apos;t{"  "}
            <span className="rotate-[0.321deg] relative">
              Nobody{" "}
              <span className="absolute -z-20 -left-5 right-0 top-3 bottom-0 w-[430px] rounded-[67px] bg-purple h-[111px]"></span>
            </span>
          </span>
          <span className="mb-1 mr-6">
            {/* got time for */}
            <span className="tracking-[-2px]">
              Got{" "}
              <span className="relative">
                time{" "}
                <span className="absolute z-10 -top-1 right-20 text-[60px] rotate-[-20.792deg]">
                  🕒
                </span>
              </span>{" "}
              for{" "}
            </span>{" "}
            {/* boring */}
            <span className="relative text-primary-black z-10 -top-1.5 ml-1">
              Boring{" "}
              <span className="absolute -z-10 w-[360px] h-[113px] top-2 -left-4 bg-green rounded-[14px]"></span>
            </span>{" "}
          </span>
          {/* investments */}
          <span className="gradient-text h-[70px] pr-10 relative">
            Investments
            {/* bulb */}
            <div className="absolute bottom-6 right-[130px] z-10 w-[140px] h-[140px]">
              <Image
                src="/hero/bulb.svg"
                alt="hero"
                width={1000}
                height={1000}
                className="w-full h-full mix-blend-multiply"
              />
            </div>
          </span>
        </h1>
      </div>

      {/* top right coin */}
      <div className="absolute top-10 right-0 -z-10 w-[165px] h-[250px]">
        <Image
          src="/hero/top-right-coin.svg"
          alt="top-right-coin"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* bottom left coin */}
      <div className="absolute bottom-[25px] left-0 -z-10 w-[173px] h-[262px]">
        <Image
          src="/hero/bottom-left-coin.svg"
          alt="bottom-left-coin"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* thunder large icon */}
      <div className="absolute top-36.5 right-61.5 w-[82px] h-[100px]">
        <Image
          src="/hero/thunder-large.svg"
          alt="thunder-large-icon"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* thunder small icon */}
      <div className="absolute top-46 right-78.5 w-[64px] h-[52px]">
        <Image
          src="/hero/thunder-small.svg"
          alt="thunder-large-icon"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* book icon */}
      <div className="absolute -bottom-4 left-53 -z-10 w-[163px] h-[262px]">
        <Image
          src="/hero/book.svg"
          alt="book-icon"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* belt icon */}
      <div className="absolute bottom-[82px] right-[139px] z-10 w-[172px] h-[260px]">
        <Image
          src="/hero/belt.svg"
          alt="belt-icon"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* star icon */}
      <div className="absolute top-[126px] left-[334px] z-10 w-[112px] h-[112px]">
        <Image
          src="/hero/star.svg"
          alt="star-icon"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>

      {/* hero description */}
      <p className="text-[22px] mt-[102px] text-center">
        Trade the Hottest Meme Coins Effortlessly
      </p>

      {/* hero bg image */}
      <div className="absolute top-5.5 bottom-0 left-0 w-full h-full flex justify-center items-center -z-20">
        <Image
          src="/hero/hero-bg-square.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-[388px] h-[388px]"
        />
      </div>
    </section>
  );
};

export default Hero;
