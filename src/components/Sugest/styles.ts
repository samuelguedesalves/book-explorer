import { styled } from '../../stitches.config';

export const SugestStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 10,
  top: '65px',
  '.listage': {
    width: '400px',
    height: '100%',
    minHeight: '400px',
    backgroundColor: 'hsl(200, 10%, 90%)',
    filter: 'drop-shadow(0px 5px 5px rgba(0,0,0, 0.4))',
    borderRadius: '8px',
    padding: '12px',
  },
  '.sugestion-item': {
    width: '100%',
    height: '40px',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'start',
    fontSize: '18px',
    cursor: 'pointer'
  }
})
