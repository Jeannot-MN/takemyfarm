import React from 'react';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import {useField, FieldHookConfig} from 'formik';
import { Box, Typography } from '@material-ui/core';

export type FTextFieldProps<Val> = {
  field: string | FieldHookConfig<Val>;
  count?: number;
} & TextFieldProps;
//eslint-disable-next-line
export function FTextField<Val = any>(props: FTextFieldProps<Val>) {
  const [field, meta] = useField(props.field);

  // @ts-ignore
  const [counter, setCounter] = React.useState();
  React.useEffect(() => {
    // @ts-ignore
    setCounter(props.count - field.value.length);
    // @ts-ignore
  }, [props.count, field.value.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TextField
        {...props}
        {...field}
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error ? meta.error : ''}
      />
      {props.count !== undefined ? (
        <Box pt="5px">
          <Typography
            align="left"
            style={{
              fontSize: '10px',
              lineHeight: '14px',
              fontFamily: 'Poppins',
              color: '#666666',
            }}
          >
            {`${counter} Characters left`}
          </Typography>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
