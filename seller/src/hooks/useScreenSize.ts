import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';
import {Theme} from '@material-ui/core';

export function useScreenSize(size: Breakpoint | number) {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up(size));
}
