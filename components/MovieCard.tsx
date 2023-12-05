import Image from "next/image";

/* 
adult: false,
backdrop_path: '/vRx6kzCItpqwnYCcj2z8qf70gv3.jpg',
genre_ids: [Array],
id: 10908,
original_language: 'en',
original_title: 'Inferno',
overview: 'Eddie Lomax (Jean-Claude Van Damme) is a drifter who has been in a suicidal funk since the death of his close friend Johnny (Danny Trejo). Riding his motorcycle into a small desert town where Johnny once lived, Lomax is confronted by a gang of toughs, who beat him and steal his bike. However, Lomax is not a man to take an injustice lying down, and soon he begins exacting a violent revenge on the men who stole his motorcycle, with local handyman Jubal Early (Pat Morita) lending a hand and several area ladies offering aid and comfort.',
popularity: 615.686,
poster_path: '/dFlI0Vb4JOsRXG1JSS2Ufs6Sp8k.jpg',
release_date: '1999-09-25',
title: 'Inferno',
video: false,
vote_average: 6.104,
vote_count: 275
*/

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

function AnimeCard({ movie }: Prop) {
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
          className="rounded-xl"
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
            <p className="text-base font-bold text-[#FFAD49]">{formatVoteAverage(movie.vote_average)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;