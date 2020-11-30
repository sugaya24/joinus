import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  posts: {
    marginBottom: '20px',
  },
});

const RecentPosts = (props: any) => {
  const classes = useStyles();
  const favoritePosts = props.favoritePosts;

  return (
    <div className={classes.posts}>
      <h3>Liked Posts</h3>
      <ul>
        {favoritePosts.length > 0 &&
          favoritePosts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default RecentPosts;
