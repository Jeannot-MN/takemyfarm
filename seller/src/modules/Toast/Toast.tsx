import React from 'react';
import { toast } from 'react-toastify';
import { Alert, AlertProps } from '@material-ui/lab';
import 'react-toastify/dist/ReactToastify.css';

type Props = Omit<AlertProps, 'severity' | 'children'>;
export function Toast(
  type: AlertProps['severity'],
  message: React.ReactNode,
  alertProps?: Props
) {
  const toastId = toast(
    <Alert
      severity={type}
      {...alertProps}
      onClose={() => {
        toast.dismiss(toastId);
      }}
    >
      {message}
    </Alert>,
    {
      hideProgressBar: true,
      closeButton: false,
    }
  );
  return toastId;
}
