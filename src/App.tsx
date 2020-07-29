import React, { useState } from 'react';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { CountryCube } from './components/CountryCube';

import { Country } from './interfaces';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

function App() {
  const classes = useStyles();
  const [countryList, setCountryList] = useState<Country[]>([]);


  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Search setCountryList={setCountryList} />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {countryList.map((country) => (
              <CountryCube key={country.alpha2Code} {...country} />
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />

    </React.Fragment>
  );
}

export default App;
