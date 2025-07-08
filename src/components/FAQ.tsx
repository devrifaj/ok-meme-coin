import Image from "next/image";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="pt-[160px] pb-[142px] pl-[88px] pr-[85px]">
      <div className="flex justify-between">
        {/* left card */}
        <div className="max-w-[480px] w-full rounded-[15px] border border-deep-green bg-deep-green backdrop-blur-[20px] text-primary-black py-8 px-10 rotate-[-7.718deg] h-full relative">
          <h4 className="text-[26px] font-semibold leading-[32px] tracking-[-0.52px] mb-5.5">
            What are <br /> Meme Coins?
          </h4>
          <p className="text-sm font-light leading-[22px] max-w-[250px]">
            Meme coins are like the jokers of the crypto world! They’re fun,
            quirky, and inspired by internet memes or jokes. Take Dogecoin, for
            example—it started as a joke but became super popular thanks to its
            community and a little help from influencers like Elon Musk. Meme
            coins are more about fun and hype than serious business!
          </p>

          {/* question mark large */}
          <div className="absolute -top-22 -right-24 w-[285px] h-[285px] rotate-[24.585deg]">
            <Image
              src="/faq/left-card/left-card-question-large.png"
              alt="question-mark-large"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* question mark small */}
          <div className="absolute -bottom-8 -right-9 w-[222px] h-[222px] rotate-[8.052deg]">
            <Image
              src="/faq/left-card/left-card-question-small.png"
              alt="question-mark-large"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* top coin */}
          <div className="absolute -top-[40px] left-39 w-14 h-14">
            <Image
              src="/faq/left-card/left-card-top.svg"
              alt="coin"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* right card */}
        <div className="rounded-[15px] bg-purple backdrop-blur-[20px] text-white py-8 px-10 max-w-[715px] w-full rotate-[2.603deg] mt-9 relative">
          <h4 className="text-[26px] font-semibold leading-[32px] tracking-[-0.52px] mb-6">
            So, why are <br /> they so popular?
          </h4>
          <p className="text-sm font-light leading-[22px] max-w-[290px] w-full">
            Meme coins are all about the community vibe and the buzz they create
            online. People love to jump on trends, and these coins ride the wave
            of internet culture. Coins like Shiba Inu and Pepe Coin became hits
            because they got everyone talking (and tweeting!). But remember,
            they’re mostly for fun—they don’t usually have fancy tech or big
            projects behind them.
          </p>

          {/* right card image */}
          <div className="absolute -top-10 -right-2.5 bottom-0 w-[365px] h-[398px] -z-10 rotate-[-2.603deg]">
            <Image
              src="/faq/right-card/faq-dog.png"
              alt="faq-right"
              width={1000}
              height={1000}
              className="w-full h-full relative -z-30"
            />
          </div>

          {/* top right coin */}
          <div className="absolute -top-30 -right-12 w-[142px] h-[142px]">
            <Image
              src="/faq/right-card/right-card-top-right.svg"
              alt="coin"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* top left coin */}
          <div className="absolute -top-[79px] left-18.5 w-20 h-20">
            <Image
              src="/faq/right-card/right-card-top-left.svg"
              alt="coin"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* top middle coin */}
          <div className="absolute -top-[30px] left-[266px] w-10 h-10">
            <Image
              src="/faq/right-card/right-card-top-middle.svg"
              alt="coin"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* bottom coin */}
          <div className="absolute -bottom-[29px] right-[107px] w-14 h-14">
            <Image
              src="/faq/right-card/right-card-bottom.svg"
              alt="coin"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* bottom card */}
      <div className="rounded-[20px] bg-cyan backdrop-blur-[20px] text-white pt-8.5 pb-8 px-10 max-w-[687px] w-full mt-10 mx-auto relative text-right">
        <h4 className="text-[26px] font-semibold leading-[32px] tracking-[-0.52px] mb-6">
          <span className="mr-2">Should you</span> <br /> try them out?
        </h4>
        <p className="text-sm font-light leading-[22px] max-w-[364px] w-full ml-auto">
          If you’re curious and want to join the fun, meme coins can be
          exciting! But here’s the deal: they can be a bit of a
          rollercoaster—prices can shoot up or drop fast. If you’re just
          starting, only invest what you can afford to lose and enjoy the ride.
          Think of it like a fun experiment, not a serious plan to get rich!
        </p>

        {/* bottom card button */}
        <div className="absolute -left-[66px] bottom-[24px]">
          <Link href="#" className="gradient-bg rounded-xl pt-3.5 pb-3 px-5 text-sm font-medium capitalize text-primary-black inline-block tracking-[-0.14px]">Let me know if you’d like more tweaks!</Link>
        </div>

        {/* bottom card finger image */}
        <div className="absolute -top-30 -left-33 w-[405px] h-[365px] -z-10 rotate-[28.219deg]">
          <Image
            src="/faq/bottom-card/bottom-card-finger.png"
            alt="faq-bottom"
            width={1000}
            height={1000}
            className="w-full h-full relative -z-30"
          />
        </div>

        {/* bottom inner small coin */}
        <div className="absolute top-[47px] right-[307px] w-[41px] h-[41px]">
          <Image
            src="/faq/bottom-card/bottom-card-inner-small.svg"
            alt="coin"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        {/* bottom inner large coin */}
        <div className="absolute top-[38px] left-[223px] w-[82px] h-[82px]">
          <Image
            src="/faq/bottom-card/bottom-card-inner-large.svg"
            alt="coin"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        {/* bottom right large coin */}
        <div className="absolute bottom-[45px] -right-[120px] w-[155px] h-[155px]">
          <Image
            src="/faq/bottom-card/bottom-card-right-large.svg"
            alt="coin"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        {/* bottom right small coin */}
        <div className="absolute top-[55px] -right-[276px] w-[53px] h-[53px]">
          <Image
            src="/faq/bottom-card/bottom-card-right-small.svg"
            alt="coin"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        {/* bottom left coin */}
        <div className="absolute top-[19px] -left-[200px] w-[63px] h-[63px]">
          <Image
            src="/faq/bottom-card/bottom-card-left.svg"
            alt="coin"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
