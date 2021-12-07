import { styled } from '@stitches/react';

export const ListageStyles = styled('div', {
  width: '100%',
  height: '100%',
  minHeight: 'calc(100vh - 90px)',
  padding: 0,
  backgroundColor: 'hsl(200, 5%, 95%)',
  '.container': {
    maxWidth: '1020px',
    margin: '0 auto',
    height: '100%',
  },
  '.search-section': {
    paddingTop: '34px',
  },
  '.list-section': {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.badge-empty-search': {
    display: 'block',
    textAlign: 'center',
  }
})