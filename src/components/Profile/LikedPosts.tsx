import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  posts: {
    marginBottom: '20px',
  },
});

const LikedPosts = (props: any) => {
  const classes = useStyles();
  const posts = props.posts;

  return (
    <div className={classes.posts}>
      <h3>Recent Posts</h3>
      <ul>
        {posts.length > 0 &&
          posts.map((post: any) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LikedPosts;
