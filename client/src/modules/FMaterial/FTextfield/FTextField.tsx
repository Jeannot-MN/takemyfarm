import React from 'react';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import {useField, FieldHookConfig} from 'formik';

export type FTextFieldProps<Val> = {
  field: string | FieldHookConfig<Val>;
} & TextFieldProps;
//eslint-disable-next-line
export function FTextField<Val = any>(props: FTextFieldProps<Val>) {
  const [field, meta] = useField(props.field);
  return (
    <>
      <TextField
        {...props}
        {...field}
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error ? meta.error : ''}
      />
    </>
  );
}
