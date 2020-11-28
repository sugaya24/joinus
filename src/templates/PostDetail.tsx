import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { Card, CardContent, Typography } from '@material-ui/core';

const PostDetail = () => {
  const selector = useSelector((state: any) => state);
  const path = selector.router.location.pathname;
  const id = path.split('/post/')[1];

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
            </CardContent>
          </Card>

          <h2>Users who liked this post</h2>
        </section>
      )}
    </section>
  );
};

export default PostDetail;
