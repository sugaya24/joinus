import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton, TextInput } from '../components/UIkit';
import { sendPost } from '../reducks/posts/operations';

const CreatePost = () => {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(sendPost(title, date, location, description))}
      />
    </div>
  );
};

export default CreatePost;
