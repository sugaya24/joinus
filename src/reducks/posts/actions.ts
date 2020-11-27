import { Post } from './types';

export const SEND_POST = 'SEND_POST';
export const sendPostAction = (post: Post) => {
  return {
    type: 'SEND_POST',
    payload: post,
  };
};
