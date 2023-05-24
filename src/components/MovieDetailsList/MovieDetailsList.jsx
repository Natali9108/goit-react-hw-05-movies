import { MovieURL } from 'utils';

export const MovieDetailsList = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <div>
      <img src={`${MovieURL}${poster_path}`} alt={title} />
      <h2>
        {title} ({release_date.slice(0, 4)})
      </h2>
      <ul>
        <li>
          <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
        </li>
        <li>
          <p>
            <span>Overview {overview}</span>
          </p>
        </li>
        <li>
          <span>Genres </span>
          <p>{genres.map(el => el.name).join('  ')}</p>
        </li>
      </ul>
    </div>
  );
};
