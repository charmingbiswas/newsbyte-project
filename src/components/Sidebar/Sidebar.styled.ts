import { Box, Stack, styled } from '@mui/material';

const commonStyles = (): React.CSSProperties => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

export const StyledSidebar = styled('nav')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '10px',
  color: theme.palette.text.primary,
  minWidth: '5rem',
  maxWidth: '5%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledBox = styled(Box)(({ theme }) => {
  const common = commonStyles();
  return {
    ...common,
    width: '100%',
    margin: theme.spacing(4, 0, 4, 0),
  };
}) as typeof Box;

export const StyledStack = styled(Stack)(() => ({
  ...commonStyles,
})) as typeof Stack;
