import axios from 'axios';
import { useEffect, useState } from 'react';
import { Filter } from '../../components/GameList/types';
import { Game } from '../../types';
import { API_HOST, API_KEY } from './constants';

type Response = {
  games: Game[];
  isLoading: boolean;
  err?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform,
          category: genre,
          tag,
          'sort-by': sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message))
      .finally(() => setIsLoading(false));
  }, [platform, genre, tag, sortBy]);

  return {
    games,
    err,
    isLoading,
  };
};

export default useFetch;
