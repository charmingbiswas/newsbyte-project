import { StyledBox, StyledSidebar, StyledStack } from './Sidebar.styled';
import { CurrencyExchangeOutlined, Home } from '@mui/icons-material';
import { StyledNavLink } from '../NavLink/NavLink.styled';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledBox className="AppIcon">
        <CurrencyExchangeOutlined />
      </StyledBox>
      <StyledStack gap={4} className="Links">
        <StyledNavLink to="/">
          <Home
            sx={{
              color: 'text.primary',
              width: '50%',
              height: '50%',
              filter: (theme) =>
                `drop-shadow(3px 5px 5px ${theme.palette.secondary.light})`,
            }}
          />
        </StyledNavLink>
      </StyledStack>
    </StyledSidebar>
  );
};

export default Sidebar;
