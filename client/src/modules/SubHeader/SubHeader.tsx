import * as React from 'react';

import {Box, Typography} from '@material-ui/core';

interface Props {
  heading: string;
}

export function SubHeader({heading}: Props) {
  //const classes = styles({});

  return (
    <Box pt="29px" pb="20px" width={'100%'}>
      <Typography variant="subtitle1" style={{fontWeight: 'bold'}}>{heading}</Typography>
    </Box>
  );
}
