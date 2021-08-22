import React, {useState} from 'react';
import {FTextField, FTextFieldProps} from './FTextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

//eslint-disable-next-line
export function FTextFieldPassword<Val = any>(props: FTextFieldProps<Val>) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FTextField
      InputProps={{
        type: showPassword ? 'text' : 'password',
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              tabIndex={-1}
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
