import { CSS } from '@stitches/react';
import { styled } from '../../stitches.config';

const image: CSS = {
  width: '100%',
  maxWidth: '140px',
  height: 'auto',
  borderRadius: '4px'
}
const title: CSS = {
  fontWeight: 500,
  fontSize: '18px',
  textAlign: 'center',
  marginTop: '8px',
}

const author: CSS = {
  display: 'block',
  fontWeight: 200,
  fontSize: '14px',
  marginTop: '12px',
  textAlign: 'center'
}


export const CardStyles = styled('div', {
  background: 'hsl(200, 10%, 90%)',
  width: '100%',
  maxWidth: '160px',
  padding: '8px',
  borderRadius: '6px',
  '.image': image,
  '.title': title,
  '.author': author,
})