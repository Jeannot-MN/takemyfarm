import * as React from 'react';
import styles from './DashedDividerStyles';
import {Box, Divider} from '@material-ui/core';

export function DashedDivider() {
  const classes = styles({});

  return (
    <Box width="100%">
      <Divider className={classes.sectionLine} />
    </Box>
  );
}
