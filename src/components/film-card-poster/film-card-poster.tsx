import './film-card-poster.css';

type FilmCardPosterProps = {
  size?: string;
};

export default function FilmCardPoster({
  size = '',
}: FilmCardPosterProps): React.JSX.Element {
  const computedClass = `film-card__poster ${
    size ? `film-card__poster--${size}` : ''
  }`;

  return (
    <div className={computedClass}>
      <img
        src="img/the-grand-budapest-hotel-poster.jpg"
        alt="The Grand Budapest Hotel poster"
      />
    </div>
  );
}
