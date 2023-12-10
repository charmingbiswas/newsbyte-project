import { StyledBox, StyledSidebar, StyledStack } from './Sidebar.styled';
import {
  CurrencyExchangeOutlined,
  Home,
  RequestQuote,
} from '@mui/icons-material';
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
              width: '60%',
              height: '60%',
            }}
          />
        </StyledNavLink>

        <StyledNavLink to="/cryptoconverter">
          <RequestQuote
            sx={{
              color: 'text.primary',
              width: '60%',
              height: '60%',
            }}
          />
        </StyledNavLink>
      </StyledStack>
    </StyledSidebar>
  );
};

export default Sidebar;
