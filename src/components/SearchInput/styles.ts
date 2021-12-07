import { styled } from '../../stitches.config';

export const SearchInputStyles = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.input-field': {
    height: '50px',
    width: '300px',
    backgroundColor: 'hsl(206,10%,90%)',
    border: 'none',
    borderRadius: '8px 0 0 8px',
    padding: '12px',
    outline: 'none',
    fontSize: '16px',
  },
  '.search-button': {
    width: '50px',
    height: '50px',
    backgroundColor: 'hsl(206,10%,90%)',
    borderRadius: '0 8px 8px 0',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})