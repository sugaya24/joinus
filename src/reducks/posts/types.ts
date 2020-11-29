export type Post = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  author: string;
  image: { uid: string; path: string };
};
