import { globalCss } from '../stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontFamily: '"Roboto", sans-serif',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  }
})

export default globalStyles;