type Image = {
  id: string;
  image: string;
};

export type Data = {
  description: string;
  developer: string;
  genre: string;
  id: string;
  game_url: string;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: Image[];
  status: string;
  thumbnail: string;
  title: string;
};
