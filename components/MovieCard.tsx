import Image from "next/image";

export interface MovieProp {
  id: string;
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  release_date: string;
}

interface Prop {
  movie: MovieProp;
  index: number;
}

function MovieCard({ movie }: Prop) {
  function formatVoteAverage(voteAverage: number) {
    return parseFloat(voteAverage.toFixed(1));
  }

  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[40vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          fill
          className="rounded-xl cursor-pointer"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {movie.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {movie.original_language}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./date-icon.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {movie.release_date}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {formatVoteAverage(movie.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
