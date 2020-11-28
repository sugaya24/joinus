import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const PostCard = (props: any) => {
  const dispatch = useDispatch();

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
      </CardContent>
    </Card>
  );
};

export default PostCard;
