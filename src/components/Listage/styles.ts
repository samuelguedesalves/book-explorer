import { CSS } from '@stitches/react';
import { styled } from '../../stitches.config';

const searchSection: CSS = {
  paddingTop: '34px',
};

const listSection: CSS = {
  width: '100%',
  height: '100%',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  '.badge-empty-search': {
    marginTop: '24px',
    display: 'block',
    textAlign: 'center',
    color: 'hsl(200, 5%, 70%)'
  },
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, auto))',
  gap: '20px',
  paddingTop: '24px',
};

const container: CSS = {
  width: '100%',
  maxWidth: '1020px',
  margin: '0 auto',
  height: '100%',
  '.search-section': searchSection,
  '.list-section': listSection,
};

export const ListageStyles = styled('div', {
  width: '100%',
  height: '100%',
  minHeight: 'calc(100vh - 90px)',
  padding: 0,
  backgroundColor: 'hsl(200, 5%, 95%)',
  '.container': container,
});
