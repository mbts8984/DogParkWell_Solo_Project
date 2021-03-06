import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Typography, TextField, FormControl, ListItem, ListItemText, Grid } from '@material-ui/core';
import SearchListItems from '../SearchLIs/SearchListItems.jsx';
import {withStyles, ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';


const theme =createMuiTheme({
  palette: {
    primary: {main: '#4caf50'},
    secondary: { main: '#81d4fa'}
  }
})

const styles = {
    searchForm: {
     margin: '25px',
     paddingBottom: '10px',
     width: '1200px',
     alignItems: 'center',
     height: '200px'
    },
    searchGrid: {
     justify: 'center',
     //marginLeft: '100px',
     alignItems: 'center'
    },
    input: {
     width: '500px',
     alignItems: 'center',
     display: 'inline-block',
     justify: 'center',
     marginLeft: '350px',
     marginTop: '20px'
    },
    searchNetworkBtn: {
     width: '150px',
     height: '50px', 
     marginTop: '15px',
     backgroundColor: '#81d4fa',
     color: 'black',
     marginLeft: '35%'
    },
    searchResultCard: {
     width: '1200px',
     marginTop: '5px',
     marginBottom: '30px'
    },
    head: {
     marginLeft: '480px',
     marginTop:'25px',
     marginBottom: '15px',
     textDecoration: 'underline'  
    },
    listItem: {
        marginLeft: '500px'
    }
}

class SearchNetwork extends Component {

    state = {
        humanName: '',
        results: false
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
        });
    }

    searchNetwork = (event) => {
        event.preventDefault();
        console.log('in searchNetwork', this.state.results);
        
        this.props.dispatch({ type: 'SEARCH_USERS', 
        payload: {
            query: this.state.humanName
        }
        })
        this.setState({
            results: true
        })
    }

render() {
  console.log('human name state: ', this.state.humanName);
  const {classes} = this.props;

  let displayToShow;

  if(this.state.results){
    displayToShow = (
    <>
    
    <Grid container size={4}justify="center" className={classes.searchGrid}>
     <Card className={classes.searchForm}>
      <FormControl className="networkSearchForm">
       
       <Grid container justify="center" medium={6} className={classes.input}>
        <div>
        <ThemeProvider theme={theme}>
         <TextField
          label="Human's Name"
          value={this.state.humanName}
          variant="outlined"
          margin="normal"
          helperText="Search For Your Dog Park Friends"
          fullWidth
          onChange={this.handleInputChangeFor('humanName')}
         ></TextField>
         </ThemeProvider>
         </div>
        
      <ThemeProvider theme={theme}>
        <Button className={classes.searchNetworkBtn} color="primary" type="submit" onClick={this.searchNetwork} variant="contained">Search</Button>
       </ThemeProvider>
      </Grid>
      </FormControl>
     </Card>
    <Grid container justify="center" className={classes.searchResultGrid}>
     <Card className={classes.searchResultCard}>
     <div>
      <Typography className={classes.head} variant="h4">Search Results</Typography>
    </div>
        <SearchListItems />

    </Card>
     </Grid>
    </Grid>
    </>
      )
  } else {
    displayToShow = (
        <>
    <Grid container size={4}justify="center" className={classes.searchGrid}>
     <Card className={classes.searchForm}>
      <FormControl className="networkSearchForm">
       
       <Grid container justify="center" medium={6} className={classes.input}>
        <div>
         <TextField
          label="Human's Name"
          value={this.state.humanName}
          variant="outlined"
          margin="normal"
          helperText="Search For Your Dog Park Friends"
          fullWidth
          onChange={this.handleInputChangeFor('humanName')}
         ></TextField>
         </div>
        
        <Button className={classes.searchNetworkBtn} type="submit" onClick={this.searchNetwork} variant="contained" color="secondary">Search</Button>
      </Grid>
      </FormControl>
     </Card>
    <Grid container justify="center" className={classes.searchResultGrid}>
     <Card className={classes.searchResultCard}>
     <div>
      <Typography className={classes.head} variant="h4">Search Results</Typography>
    </div>

        <ListItem className={classes.listItem}>
         <ListItemText>
             <Typography variant="body1">No Results Currently</Typography>
         </ListItemText>
        </ListItem>
     </Card>
     </Grid>
    </Grid>
    </>
    )
  }
    return (
     displayToShow
    )
}
}



const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        user: reduxState.user,
        searchReducer: reduxState.setSearchReducer
    }
}

export default withStyles(styles) (connect(mapStateToProps)(SearchNetwork));