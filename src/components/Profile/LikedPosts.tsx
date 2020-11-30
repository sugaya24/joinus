import React from 'react';
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
          posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default LikedPosts;
