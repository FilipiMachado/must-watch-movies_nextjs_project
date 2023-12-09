import LoadMore from "@/components/LoadMore";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import { fetchMovies } from "./action";

async function Home() {
  const data = await fetchMovies(1);

  return (
    <>
      <Hero />
      
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">
          Discover <span className="text-red-500">Movies</span>
        </h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>

      <Footer />
    </>
  );
}

export default Home;
