import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { getUserId, getUserName } from '../reducks/users/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';

const useStyles = makeStyles({
  coverTop: {
    height: '250px',
    width: '100%',
    background: '#25C685',
    position: 'relative',
    marginBottom: '20px',
  },
  icon: {
    height: '120px',
    width: '120px',
    position: 'absolute',
    border: '2px solid #FFFFFF',
    borderRadius: '50%',
    background: '#C4C4C4',
    bottom: '-20px',
    left: '129px',
  },
  detail: {
    width: '80%',
    margin: '0 auto',
  },
  username: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  posts: {
    marginBottom: '20px',
  },
});

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const uid = getUserId(selector);
  const posts = getPosts(selector);

  useEffect(() => {
    dispatch(fetchPosts(uid));
  }, []);

  return (
    <section>
      <div className={classes.coverTop}>
        <div className={classes.icon}></div>
      </div>
      <div className={classes.detail}>
        <h2 className={classes.username}>{username}</h2>
        <div className={classes.posts}>
          <h3>Recent Posts</h3>
          <ul>
            {posts.length > 0 &&
              posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
          </ul>
        </div>
        <div className={classes.posts}>
          <h3>Liked Posts</h3>
          <ul>
            <li>hogehogehoge</li>
            <li>hogehogehoge</li>
            <li>hogehogehoge</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
