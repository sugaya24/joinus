import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const PostCard = (props: any) => {
  return (
    <Card>
      <CardContent>
        <Typography component="h3">{props.title}</Typography>
        <Typography component="p">When: {props.date}</Typography>
        <Typography component="p">Where: {props.location}</Typography>
        <Typography component="p">Description: {props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
