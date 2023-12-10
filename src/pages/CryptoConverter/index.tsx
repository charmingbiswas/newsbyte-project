import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

function Cryptoconverter() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('bitcoin');
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedCurrency(event.currentTarget.id);
    setAnchorElement(null);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Button onClick={handleClick}>
          <Typography color="text.primary">Select Currency From</Typography>
        </Button>

        <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
          <MenuItem>
            <Button id="bitcoin" onClick={handleClose}>
              <img width="50px" height="50px" src="bitcoin.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="chainlink" onClick={handleClose}>
              <img width="50px" height="50px" src="chainlink-coin.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="ethereum" onClick={handleClose}>
              <img width="50px" height="50px" src="ethereum.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="tezos" onClick={handleClose}>
              <img width="50px" height="50px" src="tezos.png" />
            </Button>
          </MenuItem>
        </Menu>
        <Typography></Typography>
      </Box>

      <Box>
        <Button onClick={handleClick}>
          <Typography color="text.primary">Select Currency To</Typography>
        </Button>

        <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
          <MenuItem>
            <Button id="bitcoin" onClick={handleClose}>
              <img width="50px" height="50px" src="bitcoin.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="chainlink" onClick={handleClose}>
              <img width="50px" height="50px" src="chainlink-coin.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="ethereum" onClick={handleClose}>
              <img width="50px" height="50px" src="ethereum.png" />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button id="tezos" onClick={handleClose}>
              <img width="50px" height="50px" src="tezos.png" />
            </Button>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default Cryptoconverter;
