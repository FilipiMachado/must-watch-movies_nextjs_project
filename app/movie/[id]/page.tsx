"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { formatVoteAverage } from "@/components/utils/FormatVoteAverage";
import { formatDate } from "@/components/utils/FormatDate";
import { formatCurrency } from "@/components/utils/FormatCurrency";

import { ChevronLeftCircle, Loader2 } from "lucide-react";

interface MovieIdPageProps {
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
}

export default function MovieIdPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [movieInfo, setMovieInfo] = useState<MovieIdPageProps>({
    title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
    vote_average: 0,
    release_date: "",
    runtime: 0,
    budget: 0,
    revenue: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    let backdropLoaded = false;
    let posterLoaded = false;

    const checkAllImagesLoaded = () => {
      if (backdropLoaded && posterLoaded) {
        setIsLoading(false);
      }
    };

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ2MDlmZDFhNzgyMzcyZjE1MGM0MGFkODQ2MTZkZiIsInN1YiI6IjYwZTRiOGE3ODNlZTY3MDA3NGMxM2JiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SG4-z0rE2UK7HpvbFJ68F1Ym5u1nRdX9Lx8YvX2WWgo",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieInfo(response);

        // Create new image object for backdrop
        const backdropImage = new Image();
        backdropImage.src = `https://image.tmdb.org/t/p/original/${response.backdrop_path}`;
        backdropImage.onload = () => {
          backdropLoaded = true;
          checkAllImagesLoaded();
        };

        // Create new image object for poster
        const posterImage = new Image();
        posterImage.src = `https://image.tmdb.org/t/p/original/${response.poster_path}`;
        posterImage.onload = () => {
          posterLoaded = true;
          checkAllImagesLoaded();
        };
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [params.id]);

  function gotToHomePage() {
    router.push("/");
  }

  return (
    <div>
      {isLoading && movieInfo ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      ) : (
        <div className="container flex-row py-8 px-8 gap-10">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
              backgroundSize: "cover",
            }}
            className="flex justify-between h-[105vh] lg:h-[85vh] rounded-lg"
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.poster_path})`,
                backgroundSize: "cover",
              }}
              className="invisible lg:visible lg:w-[40vw] rounded-l-lg"
            ></div>
            <div className="w-[83vw] lg:w-[60vw] py-4 lg:py-32 p-6 bg-gray-800/90 rounded-r-lg">
              <div className="flex justify-end left-2 relative lg:-top-28 lg:left-0">
                <ChevronLeftCircle
                  onClick={() => gotToHomePage()}
                  className="cursor-pointer hover:text-gray-400 transition"
                  size={40}
                />
              </div>
              <div className="mb-10 lg:mb-20">
                <p className="mb-8 text-2xl lg:text-4xl">{movieInfo.title}</p>
                <p className="font-bold text-md mb-2">OVERVIEW:</p>
                <p className="text-sm lg:text-base">{movieInfo.overview}</p>
              </div>
              <div className="lg:flex-row md:flex lg:mb-20 md:mb-2 w-[288px] justify-between">
                <div>
                  <p className="font-bold">RATING</p>
                  <p>{formatVoteAverage(movieInfo.vote_average)}</p>
                </div>
                <div>
                  <p className="font-bold">RELEASE DATE</p>
                  <p>{formatDate(movieInfo.release_date)}</p>
                </div>
              </div>
              <div className="lg:flex-row md:flex mb-6 lg:mb-20 w-[500px] justify-between">
                <div>
                  <p className="font-bold">RUNTIME</p>
                  <p>{movieInfo.runtime} Minutes</p>
                </div>
                <div>
                  <p className="font-bold">BUDGET</p>
                  <p>
                    {movieInfo.budget === 0
                      ? "-"
                      : formatCurrency(movieInfo.budget)}
                  </p>
                </div>
                <div>
                  <p className="font-bold">REVENUE</p>
                  <p>
                    {movieInfo.revenue === 0
                      ? "-"
                      : formatCurrency(movieInfo.revenue)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
