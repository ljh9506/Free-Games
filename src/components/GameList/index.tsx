import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Game } from '../../types/index';
import GameCard from '../GameCard';
import { API_KEY, API_HOST } from './constants';

const GameList = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform: 'browser',
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, []);

  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!games.length) {
    return <p>No games available</p>;
  }

  return (
    <ul>
      {games?.map((game) => (
        <li key={game.id}>
          <GameCard content={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameList;
