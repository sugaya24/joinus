import React from 'react';
import { TextField } from '@material-ui/core';

type TextInputParameter = {
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  required: boolean;
  rows: number;
  value: string;
  type: string;
  onChange: any;
};

const TextInput = (props: TextInputParameter) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
