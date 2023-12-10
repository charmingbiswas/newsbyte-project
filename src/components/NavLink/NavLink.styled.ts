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
  '&.active>svg': {
    filter: `drop-shadow(3px 5px 5px ${theme.palette.secondary.light})`,
  },
}));
