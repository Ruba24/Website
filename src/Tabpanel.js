import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './TabCostom.css';
import { flexbox } from '@material-ui/system';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 750,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Billing" {...a11yProps(1)} />
          <Tab label="Shipping" {...a11yProps(2)} />
          <Tab label="Payment Detail" {...a11yProps(3)} />
          <Tab label="More" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
      <div>
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
  
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
  
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
    
   
    
      </div>
    </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
  <Box display="flex" m={3} bgcolor="background.paper">
    

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">
    

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">
    

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
  </Box>



  </div>
</form>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
  <div>
  <Box display="flex" m={3} bgcolor="background.paper">
    

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">
    

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
  </Box>
  <Box display="flex" m={3} bgcolor="background.paper">

  <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
  <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

  </Box>
 


  </div>
</form>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
      <div>
 
     
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
     
   
    
      </div>
    </form>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <form className={classes.root} noValidate autoComplete="off">
  
  
      <div>
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
  
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="Email Id " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Phone No" variant="outlined" />

      </Box>
      <Box display="flex" m={3} bgcolor="background.paper">
        
    
      <TextField id="outlined-basic" style={{marginLeft:"120px"}}  label="First Name " variant="outlined" />
      <TextField className="ml-3 " style={{marginLeft:"120px"}}  id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
     
   
    
      </div>
    </form>
        </TabPanel>
      </div>
    </div>
  );
}