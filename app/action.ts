"use server"

export const fetchMovies = async (page: number) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.MOVIES_API}`
        }
      };
    
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&limit=2`, options);
      const data = await res.json();
    
      if (!data) {
        console.log(data)
      }

      //console.log(data)

      return data
}