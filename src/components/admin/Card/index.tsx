import Image from "next/image";
import Link from "next/link";

type CardProps = {
    slug: string;
    title: string;
    image: string;
    type: "workshops" | "documentation";
};

const Card: React.FC<CardProps> = ({ slug, title, image, type }) => {
    return (
        <Link
            href={`/admin/${type}/${slug}`}
            className="block overflow-hidden rounded-lg border border-gray-200 shadow hover:shadow-md transition-shadow"
        >
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                    {title}
                </h2>
            </div>
        </Link>
    );
};

export default Card;
