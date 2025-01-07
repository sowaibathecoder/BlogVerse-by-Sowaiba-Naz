import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-5">
        {/* Adjusted margin or padding */}
        <Image
          src="/blog_verse_logo.png"
          alt="WEBSITE_LOGO"
          width={300}
          height={300}
          className="w-[230px] h-[230px] sm:w-[230px] sm:h-[230px] md:w-[300px] md:h-[300px] mb-5"
        />
        <h2 className="text-[24px] sm:text-2xl md:text-[40px] px-[24px] md:px-[70px] lg:px-[100px] font-mono md:leading-normal tracking-tighter text-center font-semibold">
          Elevate Your Curiosity, Embrace Knowledge and Ignite New Possibilities
          with "BlogVerse"
        </h2>
        <p className="text-center text-[14px] sm:text-[16px] md:text-[18px] mt-5 px-[40px] md:px-[90px] lg:px-[110px] xl:px-[160px]">
          At BlogVerse, we focus on providing practical solutions, useful tips,
          and tech-related content that sparks curiosity. Whether you’re here to
          learn something new, find tech inspiration, or just enjoy a fun read,
          you’ve come to the right place.
        </p>
        <p className="text-center text-[14px] sm:text-[16px] md:text-[18px] mt-5 px-[35px] md:px-[90px] lg:px-[110px] xl:px-[160px]">
          Feel free to explore our posts and see what catches your interest.
          Let’s dive in and discover together!
        </p>
        <Link href="/blog">
          <button className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-[#55e4fd] font-bold text-sm sm:text-lg md:text-xl uppercase mt-8 sm:mt-12 md:mt-16 font-serif h-10 sm:h-12 w-40 sm:w-48 md:w-56 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95">
            Explore Blogs
          </button>
        </Link>
      </div>
    </>
  );
}
