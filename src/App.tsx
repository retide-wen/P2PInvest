import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Divider, Tabs, Tab } from '@mui/material';
import NotesUploads from './components/notesUploads';
import NotesDetails from './components/NotesDetails';

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            P2P Invest tool
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     
        <Box sx={{ display: 'flex', mt: 1 }}>
          <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
            > 
              <Tab label="Sync my notes" />
              <Tab label="My Notes status & performance" />
              <Tab label="Prospert notes history" />
            </Tabs>
          </Box>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            {value === 0 && (
              <>
                <NotesUploads />
              </>
            )}
            {value === 1 && 
            <>
            <NotesDetails />
            </>}
             

          </Box>
        </Box>
      
    </div>
  );
};

export default App;