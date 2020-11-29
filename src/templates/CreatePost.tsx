import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton, TextInput } from '../components/UIkit';
import { sendPost } from '../reducks/posts/operations';
import { getUserId, getUserName } from '../reducks/users/selector';

const CreatePost = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const author = getUserName(selector);
  const uid = getUserId(selector);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const inputTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const inputDate = useCallback(
    (e) => {
      setDate(e.target.value);
    },
    [setDate]
  );
  const inputLocation = useCallback(
    (e) => {
      setLocation(e.target.value);
    },
    [setLocation]
  );
  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  return (
    <div>
      <h2>Create Post</h2>
      <TextInput
        fullWidth={true}
        label={'Title'}
        multiline={false}
        required={true}
        rows={1}
        value={title}
        type={'text'}
        onChange={inputTitle}
      />
      <TextInput
        fullWidth={true}
        label={'When'}
        multiline={false}
        required={true}
        rows={1}
        value={date}
        type={'text'}
        onChange={inputDate}
      />
      <TextInput
        fullWidth={true}
        label={'Where'}
        multiline={false}
        required={true}
        rows={1}
        value={location}
        type={'text'}
        onChange={inputLocation}
      />
      <TextInput
        fullWidth={true}
        label={'Description'}
        multiline={true}
        required={false}
        rows={5}
        value={description}
        type={'text'}
        onChange={inputDescription}
      />
      <PrimaryButton
        label={'Send'}
        onClick={() =>
          dispatch(sendPost(title, date, location, description, author, uid))
        }
      />
    </div>
  );
};

export default CreatePost;
