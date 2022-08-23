import { BREAKPOINT } from '@angular/flex-layout';

export const BS4_BREAKPOINTS = [
  { alias: 'gt-xs', mediaQuery: 'screen and (min-width: 300px) and (max-width: 375px)' },
  { alias: 'lt-sm', mediaQuery: 'screen and (min-width: 376px) and (max-width: 425px)' },
  { alias: 'lt-md', mediaQuery: 'screen and (min-width: 426px) and (max-width: 575px)' },
  { alias: 'xs', mediaQuery: 'screen and (min-width: 576px) and (max-width: 768px)' },
  { alias: 'sm', mediaQuery: 'screen and (min-width: 769px) and (max-width: 1024px)' },
  { alias: 'md', mediaQuery: 'screen and (min-width: 1025px) and (max-width: 1200px)' },
  { alias: 'lg', mediaQuery: 'screen and (min-width: 1201px) and (max-width: 1440px)' },
  { alias: 'lt-xl', mediaQuery: 'screen and (min-width: 1441px) and (max-width: 2000px)' },
  { alias: 'xl', mediaQuery: 'screen and (min-width: 2001px)' },

  { alias: 'gt-sm', mediaQuery: 'screen and (max-width: 575px)' },
  { alias: 'gt-md', mediaQuery: 'screen and (max-width: 768px)' },
  { alias: 'lt-lg', mediaQuery: 'screen and (max-width: 1200px)' },
  { alias: 'gt-lg', mediaQuery: 'screen and (max-width: 1440px)' },

];

// Custom breakpoints flex layout
export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: BS4_BREAKPOINTS,
  multi: true,
};
