import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Divider } from '@mui/material';

const NotesUploads: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file.name);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Upload your file
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input
              accept="*"
              style={{ display: 'none' }}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button variant="contained" color="primary" component="span">
                Choose File
              </Button>
            </label>
          </Box>
          {file && <Typography variant="body1" sx={{ mt: 2 }}>{file.name}</Typography>}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
      </Container>
    </div>
  );
};

export default NotesUploads;