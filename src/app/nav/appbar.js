
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { MuiDrawer } from './drawer';
import { Toolbar } from '@mui/material';


export const MyAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{paddingBottom: 20}}>
        <AppBar position="static">
            <Toolbar style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
                <MuiDrawer/>
            </Toolbar>
        </AppBar>
    </Box>
  );
}