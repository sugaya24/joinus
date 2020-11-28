import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';
import { Post } from '../reducks/posts/types';

const Discover = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const posts = getPosts(selector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section>
      <h2>Discover</h2>
      {posts.length > 0 &&
        posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            location={post.location}
            description={post.description}
          />
        ))}
    </section>
  );
};

export default Discover;
