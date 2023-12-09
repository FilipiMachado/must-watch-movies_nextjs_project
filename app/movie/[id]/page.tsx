"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { formatVoteAverage } from "@/components/utils/FormatVoteAverage";
import { formatDate } from "@/components/utils/FormatDate";
import { formatCurrency } from "@/components/utils/FormatCurrency";

import { ChevronLeftCircle } from "lucide-react";

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
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  function gotToHomePage() {
    console.log("Ta indo! Confia!");
    router.push("/");
  }

  console.log(movieInfo);

  return (
    <div className="sm:p-16 py-16 px-8 gap-10">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
          backgroundSize: "cover",
        }}
        className="flex justify-between h-[80vh] rounded-lg"
      >
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.poster_path})`,
            backgroundSize: "cover",
          }}
          className="w-[40vw] rounded-l-lg"
        ></div>
        <div className="w-[60vw] py-32 p-6 bg-gray-800/90 rounded-r-lg">
          <div className="flex justify-end relative -top-28">
            <ChevronLeftCircle
              onClick={() => gotToHomePage()}
              className="cursor-pointer hover:text-gray-400 transition"
              size={40}
            />
          </div>
          <div className="mb-20">
            <p className="mb-8 text-4xl">{movieInfo.title}</p>
            <p className="font-bold text-md mb-2">OVERVIEW:</p>
            <p>{movieInfo.overview}</p>
          </div>
          <div className="flex mb-20 w-64 justify-between">
            <div>
              <p className="font-bold">RATING</p>
              <p>{formatVoteAverage(movieInfo.vote_average)}</p>
            </div>
            <div>
              <p className="font-bold">RELEASE DATE</p>
              <p>{formatDate(movieInfo.release_date)}</p>
            </div>
          </div>
          <div className="flex w-96 justify-between">
            <div>
              <p className="font-bold">RUNTIME</p>
              <p>{movieInfo.runtime} Minutes</p>
            </div>
            <div>
              <p className="font-bold">BUDGET</p>
              <p>{formatCurrency(movieInfo.budget)}</p>
            </div>
            <div>
              <p className="font-bold">REVENUE</p>
              <p>{formatCurrency(movieInfo.revenue)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
