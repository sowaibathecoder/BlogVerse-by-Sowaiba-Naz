import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
};

const Card = ({ title, description, imageUrl, slug }: CardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#66656534] border border-[#83828134] hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-32 md:h-56 object-cover"
      />
      <div className=" p-2 md:p-4 flex flex-col flex-grow">
        <h2 className="text-xl md:text-[22px] font-semibold text-white text-center">{title}</h2>
        <p className="text-[16px] text-[#d4d0cf] mt-2 flex-grow truncate">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-[#55e4fd] mt-3 inline-block hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
