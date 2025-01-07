const About = () => {
  return (
    <div className="container mx-auto p-4 sm:p-5 md:p-8 lg:p-8 pt-8 pb-32">
      <h1 className="text-center font-mono font-bold text-white text-[40px] sm:text-4xl md:text-[40px] tracking-tighter mt-12 mb-8 sm:mb-2 md:mb-12">
        About Us
      </h1>

      <section className="mb-8">
        <p className="text-lg text-white leading-relaxed px-0 sm:px-0 md:px-32 lg:px-32">
          👋🏻 Hello everyone! Welcome to{" "}
          <span className="font-bold text-[#55e4fd]">BlogVerse</span>, an
          amazing blog website where we bring interesting and engaging content
          just for you. Whether you&apos;re into tech, daily routines, or anything
          else fascinating, you&apos;re in the right place! If you love exploring new
          and exciting topics, our blogs will definitely keep you hooked. ✨
        </p>
      </section>

      <section className="bg-[#66656534] border border-[#83828134] p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-lg text-gray-100 leading-relaxed">
          At <span className="font-bold text-[#55e4fd]">BlogVerse</span>, we aim
          to spark curiosity and empower readers with valuable insights and 
          fresh ideas. Our goal is to create content that educates, inspires,
          and offers a delightful reading experience for everyone.
        </p>
      </section>

      <section className="bg-[#66656534] border border-[#83828134] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Get Connected
        </h2>
        <p className="text-lg text-gray-100 leading-relaxed">
          Expand your knowledge with our insightful blogs and join our growing
          community. Connect with us on{" "}
          <a
            href="https://www.linkedin.com"
            className="text-[#55e4fd] underline"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="https://github.com" className="text-[#55e4fd] underline">
            GitHub
          </a>
          . Have questions or suggestions? Feel free to{" "}
          <a href="/contact" className="text-[#55e4fd] underline">
            contact us
          </a>
          . We&apos;d love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
