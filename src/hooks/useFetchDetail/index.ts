import axios from 'axios';
import { useEffect, useState } from 'react';
import { Data } from '../../components/Details/type';
import { API_HOST, API_KEY } from './constants';

type Response = {
  details?: Data | null;
  err: string;
};

const useFetchDetail = (id: string): Response => {
  const [details, setDetails] = useState<Data | null>(null);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api/game?id=${id}`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      })
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        setErr(e.message);
      });
  }, [id]);

  return {
    details,
    err,
  };
};

export default useFetchDetail;
