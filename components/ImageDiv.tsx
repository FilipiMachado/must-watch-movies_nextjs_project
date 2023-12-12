"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Movie {
  title: string;
  poster_path: string;
  id: number;
}

interface ImageDivProps {
  movie: Movie;
}

const ImageDiv = ({ movie }: ImageDivProps) => {
  const router = useRouter();

  function goToSingleMoviePage(movieId: number) {
    router.push(`movie/${movieId}`);
  }

  return (
    <div
      className="relative h-[50vh] lg:w-full lg:h-[38vh]"
      onClick={() => goToSingleMoviePage(movie.id)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        fill
        className="rounded-xl cursor-pointer transform transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

export default ImageDiv;
