import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="wrapper bg-white/6 rounded-[20px] px-5 mt-5 py-[2.5px]">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link href="#" className="flex items-center gap-1.5">
          <span className="gradient-text text-[50px] font-semibold tracking-[-1px]">
            OK
          </span>{" "}
          <span className="flex flex-col text-2xl font-medium tracking-[-0.48px] text-white leading-[22.857px]">
            <span>Meme</span> <span>Coin</span>
          </span>
        </Link>
        {/* header button */}
        <Link
          href="#"
          className="flex items-center gap-3 gradient-bg text-primary-black text-sm font-medium tracking-[-0.14px] pl-[20px] pr-[20px] pb-[9px] pt-[10px] rounded-[12px]"
        >
          <Image
            src="/icons/wallet.svg"
            alt="wallet"
            width={50}
            height={50}
            className="w-[27px] h-[27px]"
          />
          0xDe1...6F33
        </Link>
      </nav>
    </header>
  );
};

export default Header;
