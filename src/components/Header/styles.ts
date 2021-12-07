import { styled } from '../../stitches.config';

export const HeaderStyles = styled('header', {
  backgroundColor: '$hiContrast',
  color: '$loContrast',
  height: '90px',
  '.container': {
    width: '100%',
    height: '100%',
    maxWidth: '1020px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export const Logo = styled('h2', {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
})