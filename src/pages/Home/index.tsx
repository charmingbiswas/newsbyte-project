import { Home as HomeIcon } from '@mui/icons-material';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const getCoinLogo = (name: string) => {
  switch (name) {
    case 'bitcoin':
      return <img width="50px" height="50px" src="bitcoin.png" />;
    case 'ethereum':
      return <img width="50px" height="50px" src="ethereum.png" />;
    case 'chainlink':
      return <img width="50px" height="50px" src="chainlink-coin.png" />;
    case 'tezos':
      return <img width="50px" height="50px" src="tezos.png" />;
  }
};

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    //fetch data from proxy node server to prevent cors errors
    axios.get('http://localhost:4000').then((res) => {
      setApiData(res.data.data);
      setIsLoading(false);
    });
  }, []);

  const render = () => {
    if (isLoading) {
      return <Skeleton animation="wave" />;
    }
    let keys = Object.keys(apiData);
    return keys.map((key) => {
      const currentPrice = parseFloat(apiData[key].quote.USD.price);
      const percentChangeSevenDays = parseFloat(
        apiData[key].quote.USD.percent_change_7d,
      );
      const percentChangeTwentyFourDays = parseFloat(
        apiData[key].quote.USD.percent_change_24h,
      );
      let isNegative7 = percentChangeSevenDays < 0;
      let isNegative24 = percentChangeTwentyFourDays < 0;
      const logo = getCoinLogo(apiData[key].slug);
      return (
        <List key={apiData[key].id}>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              borderRadius: '10px',
            }}
          >
            <ListItemButton
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
              }}
            >
              <ListItemIcon>{logo}</ListItemIcon>
              <ListItemText secondary={`${apiData[key].symbol}`}>
                <Typography>{`${apiData[key].name}`}</Typography>
              </ListItemText>
              <ListItemText secondary="$">
                <Typography color="tertiary.main">{`${currentPrice.toFixed(
                  2,
                )}`}</Typography>
              </ListItemText>
              <ListItemText secondary={'7d'}>
                <Typography
                  color={isNegative7 ? 'senary.main' : 'tertiary.main'}
                >{`${percentChangeSevenDays.toFixed(2)}%`}</Typography>
              </ListItemText>

              <ListItemText secondary={'24h'}>
                <Typography
                  color={isNegative24 ? 'senary.main' : 'tertiary.main'}
                >{`${percentChangeTwentyFourDays.toFixed(2)}%`}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      );
    });
  };

  return (
    <Box>
      <Stack
        className="Header"
        direction="row"
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <HomeIcon />
        <Typography variant="h5">Dashboard</Typography>
      </Stack>
      <Divider />
      <Stack className="Content">{render()}</Stack>
    </Box>
  );
}

export default Home;
