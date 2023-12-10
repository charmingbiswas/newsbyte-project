import {
  Box,
  Button,
  Menu,
  MenuItem,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../rootLayout';
import { getCoinLogo } from '../Home';

function Cryptoconverter() {
  const { apiData, isLoading } = useContext(GlobalContext);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('1');
  const [totalDollars, setTotalDollars] = useState<number>(0);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedCurrency(event.currentTarget.id);
    setAnchorElement(null);
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = parseFloat(event.currentTarget.value);
    const currentPriceInDollars = apiData[selectedCurrency].quote.USD.price;
    const totalDollars = currentPriceInDollars * value;
    setTotalDollars(totalDollars);
  };

  const render = () => {
    if (isLoading) return <Skeleton animation="wave" />;
    let elements = Object.keys(apiData).map((key) => {
      return (
        <MenuItem key={apiData[key].name}>
          <Button id={apiData[key].id} onClick={handleClose}>
            {getCoinLogo(apiData[key].slug)}
          </Button>
        </MenuItem>
      );
    });

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button onClick={handleClick}>
            <Typography color="text.primary">Select Currency From</Typography>
          </Button>
          <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
            {elements}
          </Menu>
          <Typography>Enter Currency Amount:</Typography>
          <TextField variant="filled" onChange={handleCurrencyChange} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button onClick={handleClick}>
            <Typography color="text.primary">Select Currency To</Typography>
          </Button>
          <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
            {elements}
          </Menu>
          <Typography>
            Converted Value:{' '}
            {totalDollars / apiData[selectedCurrency].quote.USD.price}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {render()}
    </Box>
  );
}

export default Cryptoconverter;
