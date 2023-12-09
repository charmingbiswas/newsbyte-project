import { styled } from '@mui/material';

export const StyledSidebar = styled('nav')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '10px',
  padding: theme.spacing(1),
  margin: theme.spacing(3, 1, 1, 3),
  color: theme.palette.text.primary,
  width: '5%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
