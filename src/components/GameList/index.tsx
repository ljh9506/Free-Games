import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import GameCard from '../GameCard';
import { List, ListItem } from './styles/GameList';
import { Filter } from './types';
import GameFilter from '../GameFilter';
import useFetch from '../../hooks/useFetch';

const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  });
  const { games, err } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }, []);

  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!games.length) {
    return <p>No games available</p>;
  }

  return (
    <>
      <GameFilter onFilterChange={onFilterChange} />
      <List>
        {games?.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} key={game?.id} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameList;
