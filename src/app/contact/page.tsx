const Contact = () => {
  return (
      <div className="container mx-auto px-3 sm:px-5 md:px-8 pt-8 pb-32">
        <h1 className="text-center text-[40px] font-mono font-bold text-white sm:text-4xl md:text-[40px] tracking-tighter mb-12 mt-12 sm:mb-2 md:mb-12">
          Contact Us
        </h1>
        <p className="text-lg text-white leading-relaxed px-2 sm:px-4 md:px-14 lg:px-32 mb-16">
          Got a question, suggestion, or just want to say hi? 😊 Fill out the
          form below, and we’ll get back to you soon. Whether it’s about our
          services or you just want to connect, we’re here to help! ✨ Your
          feedback means a lot to us. <br />{" "}
          <b className="text-[#55e4fd]">THANK YOU!</b>
        </p>
        <form className="max-w-lg mx-auto bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border-2 border-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#55e4fd]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border-2 border-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#55e4fd]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 mt-2 border-2 border-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#55e4fd]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#55e4fd] text-black rounded-md hover:bg-[#39c4f7] transition duration-300 ease-in-out font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default Contact;
