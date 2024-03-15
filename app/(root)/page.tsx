import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });
  return (
    <>
      <section className="home">
        <h1 className="home-heading">Unleash the Creativity of AI with <br/> <span className="h1-headinglogotitle bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 inline-block text-transparent bg-clip-text "> ArtIQnova</span> </h1>
        <ul className="flex-center w-full gap-20 ">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center rounded-full bg-white p-4 w-fit">
                <Image src={link.icon} alt="Image" width={24} height={24} />
              </li>
              <p className="text-white text-center p-14-medium">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className="sm:mt-12 ">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
