import Home from "@/components/Home";
import axios from "axios";

export async function generateMetadata(paramKey: any){
  let searchMovie = paramKey.searchParams.movie || null;
  if (searchMovie === null) {
    searchMovie = "avengers";
  }
  const movie = await axios
  .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          query: searchMovie,
        },
      })
  return {
    title: movie?.data().title,
    description: movie?.data().overview,
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "light only",
      "twitter:image": `https://image.tmdb.org/t/p/w500/${movie?.data().poster_path}`,
      "twitter:card": "summary_large_image",
      "og:url": "oumat-iqraa.com",
      "og:image": `https://image.tmdb.org/t/p/w500/${movie?.data().poster_path}`,
      "og:type": "website",
    }
    }
}

export default function HomePage() {
  return <Home />;
}
