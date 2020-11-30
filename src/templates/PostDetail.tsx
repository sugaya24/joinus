import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import {
  Card,
  CardContent,
  Icon,
  IconButton,
  Typography,
} from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { fetchFavoriteUsers } from '../reducks/posts/operations';
import { getFavoriteUsers } from '../reducks/posts/selectors';

const PostDetail = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state);
  const path = selector.router.location.pathname;
  const id = path.split('/post/')[1];
  const favoriteUsers = getFavoriteUsers(selector);

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    db.collection('posts')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setPost(data);
      });
  }, []);

  useEffect(() => {
    if (!post) return;
    dispatch(fetchFavoriteUsers(post.id));
  }, [post]);

  return (
    <section>
      {post && (
        <section>
          <Card>
            <CardContent>
              <Typography component="h3">{post.title}</Typography>
              <Typography component="p">WHEN: {post.date}</Typography>
              <Typography component="p">WHERE: {post.location}</Typography>
              <Typography component="p">
                DESCRIPTION: {post.description}
              </Typography>
              <IconButton>
                <Icon>
                  <FavoriteBorder />
                </Icon>
              </IconButton>
            </CardContent>
          </Card>

          <h2>Users who liked this post</h2>
          <ul>
            {favoriteUsers.length > 0 &&
              favoriteUsers.map((user: any) => (
                <li key={user.uid}>{user.username}</li>
              ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default PostDetail;
