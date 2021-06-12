import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Location } from 'history';
import GameCard from '../GameCard';
import { List, ListItem } from './styles/GameList';
import { Filter } from './types';
import GameFilter from '../GameFilter';
import useFetch from '../../hooks/useFetch';
import Pagination from '../Pagination';

const GameList = (): ReactElement => {
  const page = useLocation<Location>();
  const p = Number(page.search.split('=')[1]) || 1;
  const perPage = 10;
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  });
  const { games, err, isLoading } = useFetch(filter);
  const countPage = Math.ceil(games.length / perPage);

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

  return (
    <>
      <GameFilter onFilterChange={onFilterChange} isLoading={isLoading} />
      <List>
        {games?.slice((p - 1) * perPage, perPage * p).map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} key={game?.id} />
          </ListItem>
        ))}
      </List>
      <Pagination countPage={countPage} />
    </>
  );
};

export default GameList;
