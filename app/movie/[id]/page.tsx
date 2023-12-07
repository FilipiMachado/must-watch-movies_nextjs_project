"use client";

import axios from "axios";
import { useParams } from "next/navigation";

export default function MovieIdPage() {
  const params = useParams();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ2MDlmZDFhNzgyMzcyZjE1MGM0MGFkODQ2MTZkZiIsInN1YiI6IjYwZTRiOGE3ODNlZTY3MDA3NGMxM2JiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SG4-z0rE2UK7HpvbFJ68F1Ym5u1nRdX9Lx8YvX2WWgo'
    }
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
    })
    .catch((err) => console.error(err));

  return (
    <div className="sm:p-16 py-16 px-8 gap-10">
      <div className="flex justify-between h-[80vh]">
        <div className="w-[40vw] bg-slate-500/50 rounded-l-lg">
          <p>BACKGROUND IMAGE</p>
        </div>
        <div className="w-[60vw] py-28 p-6 bg-gray-400 rounded-r-lg">
          <div className="mb-20">
            <p className="mb-8 text-4xl">Movie Title</p>
            <p className="font-bold text-md mb-2">SYNOPSIS</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              distinctio, repellat sapiente rerum asperiores ullam voluptatum
              placeat ut, vero deserunt odio ipsum maiores. Optio fugiat
              aspernatur, quis illum eaque saepe.
            </p>
          </div>
          <div className="flex mb-20 w-64 justify-between">
            <div>
              <p className="font-bold">RATING</p>
              <p>8.0</p>
            </div>
            <div>
              <p className="font-bold">RELEASE DATE</p>
              <p>01/01/2023</p>
            </div>
          </div>
          <div className="flex w-96 justify-between">
            <div>
              <p className="font-bold">RUNTIME</p>
              <p>2:45h</p>
            </div>
            <div>
              <p className="font-bold">BUDGET</p>
              <p>$500.000</p>
            </div>
            <div>
              <p className="font-bold">REVENUE</p>
              <p>$1.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
