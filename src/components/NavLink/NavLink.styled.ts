import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  '&.active': {
    borderLeft: `5px solid ${theme.palette.text.primary}`,
  },
}));
