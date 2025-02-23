export default Page;

import type { MovieDetails } from "../types";

function Page(props: { movie: MovieDetails }) {
  return (
    <>
      <h1>{props.movie.title}</h1>
      Release Date: {props.movie.release_date}
      <br />
      Director: {props.movie.director}
      <br />
      Producer: {props.movie.producer}
    </>
  );
}
