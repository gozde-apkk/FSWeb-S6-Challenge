import DropDown from "./DropDown";

function Film({ char, films }) {
  return (
    <div>
      {films
        .filter((f, i) => f.title === char.films[i])
        .map((film, i) => (
          <DropDown key={i} title={film.title}>
            <p>{film.opening_crawl}</p>
            <p>Title: {film.title}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>
          </DropDown>
        ))}
    </div>
  );
}

export default Film;