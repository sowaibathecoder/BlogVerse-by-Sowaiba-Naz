import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-center p-4 rounded-lg w-full">
      <div className="space-y-2 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-center space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/sowaibathecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-700 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sowaiba-naz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-white text-sm md:ml-[125px]">
          &copy; 2024 All Rights Reserved
        </p>
        <p className="text-white text-sm font-medium">
          Designed by SOWN SHEIKH
        </p>
      </div>
    </footer>
  );
}
