import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Icon, IconButton, makeStyles } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import {
  getFavoritePosts,
  getImage,
  getUserId,
  getUserName,
} from '../reducks/users/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../reducks/posts/operations';
import { getPosts } from '../reducks/posts/selectors';
import { storage } from '../firebase';
import {
  fetchFavoritePosts,
  signOut,
  updateImage,
} from '../reducks/users/operations';
import { LikedPosts, RecentPosts } from '../components/Profile';

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
    left: 0,
    right: 0,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  detail: {
    width: '80%',
    margin: '0 auto',
  },
  username: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profileHeader: {
    paddingTop: '40px',
    textAlign: 'center',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingIconWrapper: {
    marginRight: '16px',
  },
  settingIcon: {
    color: '#FFFFFF',
    padding: 0,
  },
  dummy: {
    display: 'none',
  },
});

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const uid = getUserId(selector);
  const posts = getPosts(selector);
  const userImage = getImage(selector);
  const favoritePosts = getFavoritePosts(selector);

  const inputFile = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState(userImage);

  const iconClick = () => {
    inputFile.current?.click();
  };

  const uploadImage = useCallback(
    (e) => {
      const file = e.target.files;
      console.log('file', file);
      let blob = new Blob(file, { type: 'image/png' });

      const S =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint16Array(N)))
        .map((n) => S[n % S.length])
        .join('');

      const uploadRef = storage.ref('images').child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((downloadURL) => {
            const newImage = { id: fileName, path: downloadURL };
            setImage(newImage);
            dispatch(updateImage(uid, newImage));
          })
          .catch((err) => console.log('err', err));
      });
    },
    [setImage]
  );

  useEffect(() => {
    dispatch(fetchPosts(uid));
    dispatch(fetchFavoritePosts());
  }, []);

  return (
    <section>
      <div className={classes.coverTop}>
        <div className={classes.profileHeader}>
          <div className={classes.settingIconWrapper}>
            <IconButton>
              <Icon>
                <ExitToApp className={classes.dummy} />
              </Icon>
            </IconButton>
          </div>
          <div>
            <h2>Profile</h2>
          </div>
          <div className={classes.settingIconWrapper}>
            <IconButton onClick={() => dispatch(signOut())}>
              <Icon>
                <ExitToApp className={classes.settingIcon} />
              </Icon>
            </IconButton>
          </div>
        </div>
        <div className={classes.icon} onClick={iconClick}>
          <input
            type="file"
            ref={inputFile}
            onChange={(e) => uploadImage(e)}
            style={{ display: 'none' }}
          />
          <img className={classes.userIcon} src={image.path} alt="user icon" />
        </div>
      </div>
      <div className={classes.detail}>
        <h2 className={classes.username}>{username}</h2>
        <RecentPosts favoritePosts={favoritePosts} />
        <LikedPosts posts={posts} />
      </div>
    </section>
  );
};

export default Profile;
