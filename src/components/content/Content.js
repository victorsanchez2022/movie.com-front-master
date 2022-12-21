import "./Content.css";

import { Card } from "../card/Card";
import { useEffect, useState } from "react";
import { API_URL } from "../../util/Util";

export const Content = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //getMovies();
    getMoviesAsync();
  }, []);

  const getMovies = () => {
    console.log(1);
    fetch(API_URL + "movie")
      .then((response) => response.json())
      .then((response) => {
        console.log(`2`, 2);
        //console.log(response);
        setMovies(response);
      });
    console.log(`3`, 3);
  };

  const getMoviesAsync = async () => {
    let response = await fetch(API_URL + "movie");
    response = await response.json();
    setMovies(response);
  };

  return (
    <div className="row">
      {movies.map((movie, idx) => (
        <Card
          key={idx}
          name={movie.name}
          description={
            !movie.description ? "No hay descripción" : movie.description
          }
          staffList={movie.staffList}
          image={
            !movie.imageLink
              ? "https://es.web.img3.acsta.net/medias/nmedia/18/86/91/41/19870073.jpg"
              : movie.imageLink
          }
          id={movie.id}
        />
      ))}
    </div>
  );
};
