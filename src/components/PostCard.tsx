import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Icon,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import {
  addFavoritePost,
  deleteFavoritePost,
} from '../reducks/posts/operations';

const PostCard = (props: any) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(props.hasFavorite);

  return (
    <Card>
      <CardContent>
        <Typography
          component="h3"
          onClick={() => dispatch(push(`/post/${props.id}`))}
        >
          {props.title}
        </Typography>
        <Typography component="span">{props.author}</Typography>
        <Typography component="p">When: {props.date}</Typography>
        <Typography component="p">Where: {props.location}</Typography>
        <Typography component="p">Description: {props.description}</Typography>
        {isFavorite ? (
          <IconButton
            onClick={() => {
              setIsFavorite(!isFavorite);
              dispatch(deleteFavoritePost(props.id));
            }}
          >
            <Icon>
              <Favorite color="error" />
            </Icon>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setIsFavorite(!isFavorite);
              dispatch(addFavoritePost(props.id));
            }}
          >
            <Icon>
              <FavoriteBorder />
            </Icon>
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;
