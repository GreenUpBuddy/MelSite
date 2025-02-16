
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Image from "next/image";
import { MuiDrawer } from './drawer';
import { Toolbar } from '@mui/material';


export const MyAppBar = () => {
  const img = JSON.parse(JSON.stringify(require("/public/images/image_50339841_cleaned_resized.png")));
  return (
    <Box sx={{ flexGrow: 1 }} style={{paddingBottom: 20}}>
        <AppBar position="static">
            <Toolbar style={{backgroundColor: "#222", color: 'white', padding: '10px', textAlign: 'center',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <MuiDrawer/>
                <Image unoptimized 
                key={0} 
                style={{ marginLeft: 'auto', marginRight: 'auto' }} // Centering the image if needed
                src={img} 
                height={100} 
                width={360} 
                alt="idk" />
            </Toolbar>
        </AppBar>
    </Box>
  );
}