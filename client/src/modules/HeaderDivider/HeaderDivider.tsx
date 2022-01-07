import * as React from 'react';

import {Box, Divider, Typography} from '@material-ui/core';

interface Props {
  heading: string;
}

export function HeaderDivider({heading}: Props) {
  // const classes = styles({});

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Typography gutterBottom variant="h6">
        {heading}
      </Typography>
      <Divider style={{marginTop: '4.4px'}} />
    </Box>
  );
}
